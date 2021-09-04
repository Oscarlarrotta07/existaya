"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  function calculateVotes(total, votes) {
    if (total === 0) return 50;
    if (votes === 0) return 0;
    return (votes / total * 100).toFixed(1);
  }

  function getPercetange(votes, likes, dislikes) {
    var likesPercentage = calculateVotes(votes, likes);
    var dislikesPercentage = calculateVotes(votes, dislikes);
    return {
      likesPercentage: "".concat(likesPercentage, "%"),
      dislikesPercentage: "".concat(dislikesPercentage, "%")
    };
  }

  var Hero = /*#__PURE__*/function () {
    function Hero() {
      _classCallCheck(this, Hero);

      console.log("hero");
      this.$el = document.querySelector(".hero");

      if (this.$el) {
        this.name = this.$el.getAttribute("data-name");
        this.$likeBtn = this.$el.querySelector(".hero__buttonLike");
        this.$dislikeBtn = this.$el.querySelector(".hero__buttonDislike");
        this.$likeBar = this.$el.querySelector(".bar__like");
        this.$likeBarText = this.$likeBar.querySelector(".bar__number");
        this.$dislikeBar = this.$el.querySelector(".bar__dislike");
        this.$dislikeBarText = this.$dislikeBar.querySelector(".bar__number");
        this.$voteEl = this.$el.querySelector(".hero__vote");
        var persistedData = JSON.parse(localStorage.getItem(this.name)) || {};
        this.likes = persistedData.likes || 0;
        this.dislikes = persistedData.dislikes || 0;
        this.votes = persistedData.votes || 0;
        this.addEvents();
        this.updateBar();
        this.persistHero();
      }
    }

    _createClass(Hero, [{
      key: "addEvents",
      value: function addEvents() {
        var self = this;

        if (this.$likeBtn) {
          this.$likeBtn.addEventListener("click", function () {
            self.likes += 1;
            self.votes += 1;
            self.updateBar();
            self.$voteEl.classList.add("hero__vote-like");
            self.persistHero();
          });
        }

        if (this.$dislikeBtn) {
          this.$dislikeBtn.addEventListener("click", function () {
            self.dislikes += 1;
            self.votes += 1;
            self.updateBar();
            self.$voteEl.classList.add("hero__vote-dislike");
            self.persistHero();
          });
        }
      }
    }, {
      key: "persistHero",
      value: function persistHero() {
        if (localStorage) {
          localStorage.setItem(this.name, JSON.stringify({
            likes: this.likes,
            dislikes: this.dislikes,
            votes: this.votes
          }));
        }
      }
    }, {
      key: "calculateVotes",
      value: function calculateVotes(total, votes) {
        if (total === 0) return 50;
        if (votes === 0) return 0;
        return (votes / total * 100).toFixed(1);
      }
    }, {
      key: "updateBar",
      value: function updateBar() {
        var likesPercentage = getPercetange(this.votes, this.likes, this.dislikes).likesPercentage;
        var dislikesPercentage = getPercetange(this.votes, this.likes, this.dislikes).dislikesPercentage; // const { likesPercentage, dislikesPercentage } = getPercetange(
        //   this.votes,
        //   this.likes,
        //   this.dislikes
        // );

        this.$likeBar.style.width = likesPercentage;
        this.$likeBarText.innerHTML = likesPercentage;
        this.$dislikeBar.style.width = dislikesPercentage;
        this.$dislikeBarText.innerHTML = dislikesPercentage;
      }
    }]);

    return Hero;
  }();

  var Card = /*#__PURE__*/function () {
    function Card($el) {
      _classCallCheck(this, Card);

      this.name = $el.getAttribute("data-name");
      var persistedData = JSON.parse(localStorage.getItem(this.name)) || {};
      this.likes = persistedData.likes || 0;
      this.dislikes = persistedData.dislikes || 0;
      this.votes = persistedData.votes || 0;
      this.$likeBar = $el.querySelector(".bar__like");
      this.$likeBarText = this.$likeBar.querySelector(".bar__number");
      this.$dislikeBar = $el.querySelector(".bar__dislike");
      this.$dislikeBarText = this.$dislikeBar.querySelector(".bar__number");
      this.updateCard();
    }

    _createClass(Card, [{
      key: "updateCard",
      value: function updateCard() {
        var likesText = getPercetange(this.votes, this.likes, this.dislikes).likesPercentage;
        var dislikesText = getPercetange(this.votes, this.likes, this.dislikes).dislikesPercentage;
        this.$likeBar.style.width = likesText;
        this.$likeBarText.innerHTML = likesText;
        this.$dislikeBar.style.width = dislikesText;
        this.$dislikeBarText.innerHTML = dislikesText;
      }
    }]);

    return Card;
  }();

  new Hero();
  var cards = document.querySelectorAll(".card");

  if (cards) {
    cards.forEach(function (card) {
      new Card(card);
    });
  }
})();