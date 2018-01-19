(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_class_1 = require("./game-object.class");

var EnemyA = function (_game_object_class_1$) {
    _inherits(EnemyA, _game_object_class_1$);

    function EnemyA(x, y, w, h, color, ctx) {
        _classCallCheck(this, EnemyA);

        var _this = _possibleConstructorReturn(this, (EnemyA.__proto__ || Object.getPrototypeOf(EnemyA)).call(this, x, y, w, h, color, ctx));

        _this.freeWill = false;
        _this.speed = .8;
        return _this;
    }

    return EnemyA;
}(game_object_class_1.GameObject);

exports.EnemyA = EnemyA;

},{"./game-object.class":3}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_class_1 = require("./game-object.class");

var EnemyB = function (_game_object_class_1$) {
    _inherits(EnemyB, _game_object_class_1$);

    function EnemyB(x, y, w, h, color, ctx) {
        _classCallCheck(this, EnemyB);

        var _this = _possibleConstructorReturn(this, (EnemyB.__proto__ || Object.getPrototypeOf(EnemyB)).call(this, x, y, w, h, color, ctx));

        _this.freeWill = false;
        _this.speed = 1.2;
        return _this;
    }

    return EnemyB;
}(game_object_class_1.GameObject);

exports.EnemyB = EnemyB;

},{"./game-object.class":3}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var GameObject = function () {
    function GameObject(x, y, w, h, color, ctx) {
        _classCallCheck(this, GameObject);

        this.speed = 10;
        this.speedX = 0;
        this.hp = 1;
        this.x = x;
        this.y = y;
        this.originalY = this.y;
        this.width = w;
        this.height = h;
        this.context = ctx;
        this.color = color;
        this.update();
    }

    _createClass(GameObject, [{
        key: "update",
        value: function update() {
            this.x += this.speedX;
            this.clearSpeed();
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }, {
        key: "moveFront",
        value: function moveFront() {
            this.speedX += this.speed;
        }
    }, {
        key: "moveBack",
        value: function moveBack() {
            this.speedX -= this.speed;
        }
    }, {
        key: "clearSpeed",
        value: function clearSpeed() {
            this.speedX = 0;
        }
    }]);

    return GameObject;
}();

exports.GameObject = GameObject;

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var enemy_a_class_1 = require("./enemy-a.class");
var enemy_b_class_1 = require("./enemy-b.class");
var game_object_class_1 = require("./game-object.class");
var obstacle_class_1 = require("./obstacle.class");
var player_class_1 = require("./player.class");

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.startGame();
    }

    _createClass(Game, [{
        key: "startGame",
        value: function startGame() {
            var _this = this;

            // Level to play
            this.level = 1;
            // Canvas setup
            this.canvas = document.getElementById('canvas');
            this.canvas.width = 800;
            this.canvas.height = 270;
            this.context = this.canvas.getContext('2d');
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            // Function for canvas refreshing
            setInterval(function () {
                return _this.updateGameArea();
            }, 20);
            // Add elements: players, obstacles and enemies
            this.createPlayer();
            this.createObstacles();
            this.createEnemies();
            this.setLevelElements(this.level);
            this.addEvents();
        }
    }, {
        key: "setLevelElements",
        value: function setLevelElements(level) {
            // General elements
            this.floor = new game_object_class_1.GameObject(0, 250, 800, 20, '#667292', this.context);
            switch (level) {
                case 1:
                    // Add elements: players, obstacles and enemies
                    break;
            }
        }
    }, {
        key: "createPlayer",
        value: function createPlayer() {
            this.player = new player_class_1.Player(20, 210, 10, 40, '#907d61', this.context);
        }
    }, {
        key: "createObstacles",
        value: function createObstacles() {
            this.obstacles = [new obstacle_class_1.Obstacle(120, 230, 20, 20, '#8d9db6', this.context), new obstacle_class_1.Obstacle(280, 230, 20, 20, '#8d9db6', this.context)];
        }
    }, {
        key: "createEnemies",
        value: function createEnemies() {
            this.enemies = [new enemy_a_class_1.EnemyA(150, 210, 10, 40, '#c83349', this.context), new enemy_a_class_1.EnemyA(240, 210, 10, 40, '#c83349', this.context), new enemy_b_class_1.EnemyB(480, 210, 10, 40, '#c83349', this.context)];
        }
    }, {
        key: "clear",
        value: function clear() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }, {
        key: "updateGameArea",
        value: function updateGameArea() {
            this.clear();
            this.player.update();
            this.obstacles[0].update();
            this.obstacles[1].update();
            this.enemies[0].update();
            this.enemies[1].update();
            this.enemies[2].update();
            this.floor.update();
        }
    }, {
        key: "addEvents",
        value: function addEvents() {
            var _this2 = this;

            window.addEventListener('keydown', function (e) {
                return _this2.checkKey(e);
            }, false);
            window.addEventListener('keyup', function (e) {
                return _this2.checkKey(e);
            }, false);
        }
    }, {
        key: "checkKey",
        value: function checkKey(e) {
            var code = e.keyCode;
            if (e.type === 'keydown') {
                switch (code) {
                    case 37:
                        this.player.moveBack();
                        console.log('Left');
                        break; // Left key
                    case 38:
                        this.player.jump();
                        console.log('Up');
                        break; // Up key
                    case 39:
                        this.player.moveFront();
                        console.log('Right');
                        break; // Right key
                    default:
                        console.log(code); // Everything else
                }
            } else if (e.type === 'keyup') {
                switch (code) {
                    case 37:
                        this.player.clearSpeed();
                        console.log('Left');
                        break; // Left key
                    case 38:
                        this.player.clearSpeed();
                        console.log('Up');
                        break; // Up key
                    case 39:
                        this.player.clearSpeed();
                        console.log('Right');
                        break; // Right key
                    default:
                        console.log(code); // Everything else
                }
            }
        }
    }]);

    return Game;
}();

var game = new Game();
// game.startGame();

},{"./enemy-a.class":1,"./enemy-b.class":2,"./game-object.class":3,"./obstacle.class":5,"./player.class":6}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Obstacle = function () {
    function Obstacle(x, y, w, h, color, ctx) {
        _classCallCheck(this, Obstacle);

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.context = ctx;
        this.color = color;
        this.update();
    }

    _createClass(Obstacle, [{
        key: "update",
        value: function update() {
            this.context.fillStyle = this.color;
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }]);

    return Obstacle;
}();

exports.Obstacle = Obstacle;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_class_1 = require("./game-object.class");

var Player = function (_game_object_class_1$) {
    _inherits(Player, _game_object_class_1$);

    function Player(x, y, w, h, color, ctx) {
        _classCallCheck(this, Player);

        return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, w, h, color, ctx));
    }

    _createClass(Player, [{
        key: "jump",
        value: function jump() {
            var goingDown = false;
            var me = this;
            var limit = 150;
            clearInterval(me.jumping);
            this.jumping = setInterval(function () {
                if (me.y > limit && !goingDown) {
                    me.y -= 3;
                    console.log('jumping: ' + me.y);
                } else {
                    goingDown = true;
                    me.y += 3;
                    if (me.y > me.originalY) {
                        clearInterval(me.jumping);
                        me.y = me.originalY;
                        goingDown = false;
                    }
                }
            }, 10);
        }
    }]);

    return Player;
}(game_object_class_1.GameObject);

exports.Player = Player;

},{"./game-object.class":3}]},{},[4])

//# sourceMappingURL=bundle.js.map
