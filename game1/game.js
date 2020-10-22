var EPT = {};
EPT.Boot = function(game) {}
;
EPT.Boot.prototype = {
    preload: function() {
        this.stage.backgroundColor = '#E10101';
        this.load.image('bg1', 'img/bg1.jpg');
        this.load.image('loading-background', 'img/loading-background.png');
        this.load.image('loading-progress', 'img/loading-progress.png')
    },
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader')
    }
};
EPT.Preloader = function(game) {}
;
EPT.Preloader.prototype = {
    preload: function() {
        var preloadBG = this.add.sprite(this.world.centerX, this.world.centerY, 'loading-background');
        preloadBG.anchor.set(0.5);
        preloadBG.scale.set(0.5);
        var preloadProgress = this.add.sprite(this.world.centerX, this.world.centerY, 'loading-progress');
        preloadProgress.anchor.set(0.5);
        preloadProgress.scale.set(0.5);
        this.load.setPreloadSprite(preloadProgress);
        WebFont.load({
            custom: {
                families: ['Nunito'],
                urls: ['fonts/Nunito/stylesheet.css']
            }
        });
        this._preloadResources()
    },
    _preloadResources() {
        var pack = EPT.Preloader.resources;
        for (var method in pack) {
            pack[method].forEach(function(args) {
                var loader = this.load[method];
                loader && loader.apply(this.load, args)
            }, this)
        }
    },
    create: function() {
        this.state.start('Game')
    }
};
EPT.Preloader.resources = {
    'image': [['bg1', 'img/bg1.jpg'], ['bg2', 'img/bg2.jpg'], ['bg3', 'img/bg3.jpg'], ['bucket', 'img/bucket.png'], ['overlay', 'img/overlay.png'], ['homescreen', 'img/homescreen.png'], ['wing', 'img/wing.png'], ['shadow', 'img/shadow.png'], ['logo', 'img/logo-k.png'], ['particle', 'img/particle.png'], ['button-start', 'img/button-main.png'], ['button-restart', 'img/button-restart.png'], ['button-exit', 'img/button-exit.png'], ['button-howtoplay', 'img/button-howtoplay.png']],
    'spritesheet': [],
    'audio': []
};
EPT.Game = function(game) {
    _restarting: false
}
;
EPT.Game.prototype = {
    create: function() {
        this.bg1 = this.add.sprite(0, 0, 'bg1');
        this.bg2 = this.add.sprite(0, 0, 'bg2');
        this.bg3 = this.add.sprite(0, 0, 'bg3');
        this.bg2.alpha = 0;
        this.bg3.alpha = 0;
        this._scoreTime = 0;
        this._score = 0;
        this.gamePaused = false;
        this.runOnce = false;
        this._deltaInitial = 1;
        this._delta = 1;
        this._flying = false;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.shadow = this.add.sprite(this.world.centerX - 130, this.world.centerY + 60, 'shadow');
        this.bucket = this.add.sprite(this.world.centerX, this.world.centerY, 'bucket');
        this.bucket.anchor.set(0.5);
        this.physics.enable(this.bucket, Phaser.Physics.ARCADE);
        this.bucket.body.setSize(125, 25, 25, 10);
        this.bucket.body.immovable = true;
        this.wing = this.add.sprite(this.world.centerX, this.world.height - 100, 'wing');
        this.wing.anchor.set(0.5);
        this.physics.enable(this.wing, Phaser.Physics.ARCADE);
        this.wing.body.setSize(56, 98, 20, 20);
        this.wingImg = this.add.sprite(0, 0, 'wing');
        this.wingImg.alpha = 0;
        this.wingImg.anchor.set(0.5);
        this.input.onUp.add(this.pointerUp, this);
        this.input.onDown.add(this.pointerDown, this);
        this.initUI();
        if (this._restarting) {
            this.clickStart();
            this._restarting = false
        }
        this.camera.resetFX();
        this.camera.flash(0x000000, 500, false)
    },
    clickStart: function() {
        this.add.tween(this.overlay).to({
            alpha: 0
        }, 200, Phaser.Easing.Linear.None, true);
        this.add.tween(this.buttonStart.scale).to({
            x: 0,
            y: 0
        }, 200, Phaser.Easing.Linear.None, true);
        this.add.tween(this.buttonHowtoplay.scale).to({
            x: 0,
            y: 0
        }, 200, Phaser.Easing.Linear.None, true);
        this.stateStatus = 'playing'
    },
    pointerDown: function() {
        this.startX = this.input.x;
        this.startY = this.input.y
    },
    pointerUp: function() {
        if (this.stateStatus == 'playing' && !this._flying) {
            this.swipeDone()
        }
    },
    swipeDone: function() {
        this.endX = this.input.x;
        this.endY = this.input.y;
        var lengthX = this.endX - this.startX;
        var lengthY = this.endY - this.startY;
        console.log('lengthX: ' + lengthX + ', lengthY: ' + lengthY);
        if (lengthY > -100) {
            lengthY = -100
        }
        this.wing.body.gravity.y = 4000;
        this.wing.body.velocity.x = lengthX * 2 * 2;
        this.wing.body.velocity.y = (-750 + lengthY) * 2;
        console.log('this.wing.body.velocity.y: ' + this.wing.body.velocity.y);
        this._flying = true
    },
    hit: function(bucket, wing) {
        this._scoreTime++;
        this._score = this._scoreTime * 10;
        this._flying = false;
        this.textScore.setText(this._score);
        if (this._score == 100) {
            this.camera.fade(0x000000, 500, false);
            this.camera.onFadeComplete.add(function() {
                this.bg1.alpha = 0;
                this.bg2.alpha = 1;
                this.bg3.alpha = 0;
                this.camera.flash(0x000000, 500, false)
            }, this)
        } else if (this._score == 200) {
            this.camera.fade(0x000000, 500, false);
            this.camera.onFadeComplete.add(function() {
                this.bg1.alpha = 0;
                this.bg2.alpha = 0;
                this.bg3.alpha = 1;
                this.camera.flash(0x000000, 500, false)
            }, this)
        }
        if (this._score >= 200) {
            var mod = this._score % 10;
            if (mod == 5) {
                this._delta = this._delta * 2
            } else if (mod == 0) {
                this._delta = this._delta * 0.5
            }
        }
        this.textScore.fontSize = 28;
        this.add.tween(this.textScore).to({
            fontSize: 56
        }, 500, Phaser.Easing.Bounce.Out, true);
        this.wingImg.alpha = 1;
        this.wingImg.scale.x = 1;
        this.wingImg.scale.y = 1;
        this.wingImg.x = this.wing.x;
        this.wingImg.y = this.wing.y;
        this.add.tween(this.wingImg).to({
            alpha: 0,
            x: this.bucket.x,
            y: this.bucket.y - 50
        }, 300, Phaser.Easing.Linear.None, true);
        this.add.tween(this.wingImg.scale).to({
            x: 0,
            y: 0
        }, 300, Phaser.Easing.Linear.None, true);
        if (this._score >= 100) {
            this.wing.x = this.rnd.integerInRange(50, this.world.width - 50)
        } else {
            this.wing.x = this.world.centerX
        }
        this.wing.y = this.world.height - 100;
        this.wing.body.gravity.y = 0;
        this.wing.body.velocity.x = 0;
        this.wing.body.velocity.y = 0;
        var messages = ['nice', 'good', 'great', 'awesome'];
        var rand = this.rnd.integerInRange(0, 3);
        this.showMessage(messages[rand] + '!');
        this.wing.scale.x = 0.5;
        this.wing.scale.y = 0.5;
        this.add.tween(this.wing.scale).to({
            x: 1,
            y: 1
        }, 500, Phaser.Easing.Bounce.Out, true)
    },
    showMessage: function(currentMessage) {
        var myMessage = game.add.text(game.world.width * 0.5, game.camera.y + 180, '' + currentMessage, {
            font: "56px Nunito",
            fill: "#FFF",
            align: "center"
        });
        myMessage.anchor.set(0.5);
        game.add.tween(myMessage).to({
            alpha: 0,
            y: game.camera.y + 230
        }, 1500, Phaser.Easing.Linear.None).start()
    },
    initUI: function() {
        var fontScore = {
            font: "42px Nunito",
            fill: "#FFF"
        };
        var fontScoreWhite = {
            font: "42px Nunito",
            fill: "#FFF",
            align: "center"
        };
        var fontScoreBig = {
            font: "56px Nunito",
            fill: "#FFF"
        };
        this.labelScore = this.add.text(this.world.centerX, 60, 'Score', fontScore);
        this.labelScore.anchor.set(0.5);
        this.textScore = this.add.text(this.world.centerX, 110, this._score, fontScoreBig);
        this.textScore.anchor.set(0.5);
        var fontTitle = {
            font: "64px Nunito",
            fill: "#FFF"
        };
        var fontTitleWhite = {
            font: "64px Nunito",
            fill: "#FFF",
            align: "center"
        };
        this.overlay = this.add.sprite(0, 0, 'homescreen');
        this.overlay.alpha = 1;
        this.buttonStart = this.add.button(this.world.centerX, this.world.height - 230, 'button-start', this.clickStart, this);
        this.buttonStart.anchor.set(0.5);
        this.buttonHowtoplay = this.add.button(this.world.centerX, this.world.height - 125, 'button-howtoplay', this.stateHowToPlay, this);
        this.buttonHowtoplay.anchor.set(0.5);
        this.screenGameoverGroup = this.add.group();
        this.screenGameoverBg = this.add.sprite(0, 0, 'overlay');
        this.screenGameoverBg.alpha = 0.75;
        this.screenGameoverLogo = this.add.sprite(this.world.centerX, 150, 'logo');
        this.screenGameoverLogo.anchor.set(0.5);
        this.screenGameoverText = this.add.text(this.world.centerX, 280, 'Game over', fontTitle);
        this.screenGameoverText.anchor.set(0.5, 0);
        this.screenGameoverScoreText = this.add.text(this.world.centerX, this.world.centerY - 30, 'Score', fontScoreWhite);
        this.screenGameoverScoreText.anchor.set(0.5, 0.5);
        this.screenGameoverScore = this.add.text(this.world.centerX, this.world.centerY + 30, this._score, fontTitleWhite);
        this.screenGameoverScore.anchor.set(0.5, 0.5);
        this.screenGameoverRestart = this.add.button(this.world.centerX, this.world.height - 270, 'button-restart', this.stateRestart, this);
        this.screenGameoverRestart.anchor.set(0.5);
        this.screenGameoverBack = this.add.button(this.world.centerX, this.world.height - 100, 'button-exit', this.stateBack, this);
        this.screenGameoverBack.anchor.set(0.5);
        this.screenGameoverGroup.add(this.screenGameoverBg);
        this.screenGameoverGroup.add(this.screenGameoverLogo);
        this.screenGameoverGroup.add(this.screenGameoverText);
        this.screenGameoverGroup.add(this.screenGameoverScoreText);
        this.screenGameoverGroup.add(this.screenGameoverScore);
        this.screenGameoverGroup.add(this.screenGameoverRestart);
        this.screenGameoverGroup.add(this.screenGameoverBack);
        this.screenGameoverGroup.visible = false
    },
    update: function() {
        switch (this.stateStatus) {
        case 'gameover':
            {
                if (!this.runOnce) {
                    this.stateGameover();
                    this.runOnce = true
                }
                break
            }
        case 'playing':
            {
                this.statePlaying()
            }
        default:
            {}
        }
    },
    statePlaying: function() {
        if (this._score >= 200) {
            this.bucket.x += this._delta;
            this.shadow.x += this._delta
        }
        if (this.bucket.x >= this.world.width - 87 || this.bucket.x <= 87) {
            this._delta = -this._delta
        }
        if (this.wing.y > this.world.height || this.wing.y < 0 || this.wing.x < 0 || this.wing.x > this.world.width) {
            this.stateStatus = 'gameover'
        }
        if (this.wing.body.velocity.y > 0) {
            this.physics.arcade.overlap(this.bucket, this.wing, this.hit, null, this)
        }
    },
    statePaused: function() {},
    stateGameover: function() {
        this.screenGameoverGroup.visible = true;
        this.screenGameoverScore.setText(this._score);
        this.screenGameoverBg.alpha = 0;
        this.add.tween(this.screenGameoverBg).to({
            alpha: 0.75
        }, 300, Phaser.Easing.Linear.None, true);
        this.screenGameoverRestart.scale.x = 0.5;
        this.screenGameoverRestart.scale.y = 0.5;
        this.add.tween(this.screenGameoverRestart.scale).to({
            x: 1,
            y: 1
        }, 750, Phaser.Easing.Exponential.Out, true);
        this.screenGameoverBack.scale.x = 0.5;
        this.screenGameoverBack.scale.y = 0.5;
        this.add.tween(this.screenGameoverBack.scale).to({
            x: 1,
            y: 1
        }, 750, Phaser.Easing.Exponential.Out, true);
        this.screenGameoverText.scale.x = 0.5;
        this.screenGameoverText.scale.y = 0.5;
        this.add.tween(this.screenGameoverText.scale).to({
            x: 1,
            y: 1
        }, 750, Phaser.Easing.Exponential.Out, true);
        this.gameoverScoreTween()
    },
    gameoverScoreTween: function() {
        this.screenGameoverScore.setText('0');
        if (this._score) {
            this.tweenedPoints = 0;
            var pointsTween = this.add.tween(this);
            pointsTween.to({
                tweenedPoints: this._score
            }, 1000, Phaser.Easing.Linear.None, true, 500);
            pointsTween.onUpdateCallback(function() {
                this.screenGameoverScore.setText('' + Math.floor(this.tweenedPoints))
            }, this);
            pointsTween.onComplete.addOnce(function() {
                this.screenGameoverScore.setText('' + this._score);
                this.spawnEmitter(this.screenGameoverScore, 'particle', 20, 300)
            }, this);
            pointsTween.start()
        }
    },
    spawnEmitter: function(item, particle, number, lifespan, frequency, offsetX, offsetY, gravity) {
        offsetX = offsetX || 0;
        offsetY = offsetY || 0;
        lifespan = lifespan || 2000;
        frequency = frequency || 0;
        var emitter = this.game.add.emitter(item.x + offsetX, item.y + offsetY, number);
        emitter.maxParticles = number;
        emitter.makeParticles(particle);
        emitter.setXSpeed(-500, 500);
        emitter.setYSpeed(-700, 300);
        emitter.setScale(2, 0.5, 2, 0.5, 500, Phaser.Easing.Linear.None);
        emitter.gravity = gravity || 750 * 2;
        emitter.start(false, lifespan, frequency, number)
    },
    stateRestart: function() {
        this.screenGameoverGroup.visible = false;
        this.gamePaused = false;
        this.runOnce = false;
        this._restarting = true;
        this.stateStatus = 'paused';
        this.state.restart(true);
    },
    stateBack: function() {
        this.screenGameoverGroup.visible = false;
        this.gamePaused = false;
        this.runOnce = false;
        this._restarting = true;

        this.add.tween(this.overlay).to({
            alpha: 1
        }, 200, Phaser.Easing.Linear.None, true);
        this.add.tween(this.buttonStart.scale).to({
            x: 1,
            y: 1
        }, 200, Phaser.Easing.Linear.None, true);
        this.add.tween(this.buttonHowtoplay.scale).to({
            x: 1,
            y: 1
        }, 200, Phaser.Easing.Linear.None, true);
        this.stateStatus = 'paused';
    },
    stateHowToPlay: function() {
        howToPlay();
    },
    render: function() {}
};
