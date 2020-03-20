function Mouse (name) {
    this.name = name;
    this.live = true;
}

Mouse.prototype.died = function() {
    this.live = false;
}

module.exports = Mouse;