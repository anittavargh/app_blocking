var Time = function (timeString) {
  var t = timeString.split(":");
  this.hour = parseInt(t[0]);
  this.minutes = parseInt(t[1]);
  this.isBiggerThan = function (other) {
    return (
      this.hour > other.hour ||
      (this.hour === other.hour && this.minutes > other.minutes)
    );
  };
};

module.exports = {
  Time,
};

