(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = require("./game-object");

var Bullet = function (_game_object_1$GameOb) {
    _inherits(Bullet, _game_object_1$GameOb);

    function Bullet(direction, x, y, ctx) {
        _classCallCheck(this, Bullet);

        var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, x, y, 15, 15, '#ffecb2', ctx));

        _this.direction = direction;
        _this.shootBullet();
        return _this;
    }

    _createClass(Bullet, [{
        key: "shootBullet",
        value: function shootBullet() {
            var _this2 = this;

            var me = this;
            clearInterval(me.jumping);
            this.missile = setInterval(function () {
                if (_this2.direction === 'front') {
                    me.x += 3;
                } else if (_this2.direction === 'back') {
                    me.x -= 3;
                }
                if (me.x > me.context.canvas.width || me.x < 0) {
                    clearInterval(me.missile);
                }
            }, 10);
        }
    }]);

    return Bullet;
}(game_object_1.GameObject);

exports.Bullet = Bullet;

},{"./game-object":4}],2:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = require("./game-object");

var EnemyA = function (_game_object_1$GameOb) {
    _inherits(EnemyA, _game_object_1$GameOb);

    function EnemyA(x, y, ctx) {
        _classCallCheck(this, EnemyA);

        var _this = _possibleConstructorReturn(this, (EnemyA.__proto__ || Object.getPrototypeOf(EnemyA)).call(this, x, y, 10, 40, '#c83349', ctx));

        _this.freeWill = false;
        _this.speed = .8;
        return _this;
    }

    return EnemyA;
}(game_object_1.GameObject);

exports.EnemyA = EnemyA;

},{"./game-object":4}],3:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = require("./game-object");

var EnemyB = function (_game_object_1$GameOb) {
    _inherits(EnemyB, _game_object_1$GameOb);

    function EnemyB(x, y, ctx) {
        _classCallCheck(this, EnemyB);

        var _this = _possibleConstructorReturn(this, (EnemyB.__proto__ || Object.getPrototypeOf(EnemyB)).call(this, x, y - 10, 10, 50, '#8a1830', ctx));

        _this.freeWill = true;
        _this.speed = 1.2;
        return _this;
    }

    return EnemyB;
}(game_object_1.GameObject);

exports.EnemyB = EnemyB;

},{"./game-object":4}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var GameObject = function () {
    function GameObject(x, y, w, h, color, ctx) {
        _classCallCheck(this, GameObject);

        this.speed = 20;
        this.speedX = 0;
        this.direction = 'front';
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
            this.speedX = this.speed;
            this.direction = 'front';
        }
    }, {
        key: "moveBack",
        value: function moveBack() {
            this.speedX = this.speed * -1;
            this.direction = 'back';
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

},{}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var enemy_a_1 = require("./enemy-a");
var enemy_b_1 = require("./enemy-b");
var game_object_1 = require("./game-object");
var obstacle_1 = require("./obstacle");
var player_1 = require("./player");

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.startGame();
    }

    _createClass(Game, [{
        key: "startGame",
        value: function startGame() {
            // Level to play
            this.level = 1;
            // Canvas setup
            this.setCanvas();
            // Add elements: players, obstacles and enemies
            this.createPlayer();
            this.createObstacles();
            this.createEnemies();
            this.setLevelElements(this.level);
            this.addEvents();
        }
    }, {
        key: "setCanvas",
        value: function setCanvas() {
            var _this = this;

            this.canvas = document.getElementById('canvas');
            this.canvas.width = 800;
            this.canvas.height = 270;
            this.context = this.canvas.getContext('2d');
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            // Function for canvas refreshing
            setInterval(function () {
                return _this.updateGameArea();
            }, 20);
        }
    }, {
        key: "setLevelElements",
        value: function setLevelElements(level) {
            // General elements
            this.floor = new game_object_1.GameObject(0, 250, 800, 20, '#667292', this.context);
            switch (level) {
                case 1:
                    // Add elements: players, obstacles and enemies
                    break;
            }
        }
    }, {
        key: "createPlayer",
        value: function createPlayer() {
            this.player = new player_1.Player(20, 210, this.context);
        }
    }, {
        key: "createObstacles",
        value: function createObstacles() {
            this.obstacles = [new obstacle_1.Obstacle(120, 230, 20, 20, '#8d9db6', this.context), new obstacle_1.Obstacle(280, 230, 20, 20, '#8d9db6', this.context)];
        }
    }, {
        key: "createEnemies",
        value: function createEnemies() {
            this.enemies = [new enemy_a_1.EnemyA(150, 210, this.context), new enemy_a_1.EnemyA(240, 210, this.context), new enemy_b_1.EnemyB(480, 210, this.context)];
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
            this.floor.update();
            this.player.update();
            this.renderEnemies();
            this.renderObstacles();
            this.renderBullets();
        }
    }, {
        key: "renderEnemies",
        value: function renderEnemies() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.enemies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var enemy = _step.value;

                    enemy.update();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "renderObstacles",
        value: function renderObstacles() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.obstacles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var obstacle = _step2.value;

                    obstacle.update();
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: "renderBullets",
        value: function renderBullets() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.player.bullets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var bullet = _step3.value;

                    // check if is still visible
                    if (bullet.x > this.canvas.width || bullet.x < 0) {
                        var index = this.player.bullets.indexOf(bullet);
                        if (index > -1) {
                            this.player.bullets.splice(index, 1);
                        }
                    }
                    bullet.update();
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
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
                    case 32:
                        this.player.shoot();
                        break; // Left key
                    case 37:
                        this.player.moveBack();
                        break; // Left key
                    case 38:
                        this.player.jump();
                        break; // Up key
                    case 39:
                        this.player.moveFront();
                        break; // Right key
                    default:
                        console.log(code); // Everything else
                }
            } else if (e.type === 'keyup') {
                switch (code) {
                    case 37:
                        this.player.clearSpeed();
                        break; // Left key
                    case 39:
                        this.player.clearSpeed();
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

},{"./enemy-a":2,"./enemy-b":3,"./game-object":4,"./obstacle":6,"./player":7}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var bullet_1 = require("./bullet");
var game_object_1 = require("./game-object");

var Player = function (_game_object_1$GameOb) {
    _inherits(Player, _game_object_1$GameOb);

    function Player(x, y, ctx) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 10, 40, '#907d61', ctx));

        _this.bullets = [];
        return _this;
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
    }, {
        key: "shoot",
        value: function shoot() {
            this.bullets.push(new bullet_1.Bullet(this.direction, this.x, this.y, this.context));
        }
    }]);

    return Player;
}(game_object_1.GameObject);

exports.Player = Player;

},{"./bullet":1,"./game-object":4}]},{},[5])

//# sourceMappingURL=bundle.js.map
