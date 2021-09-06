(function () {
  function calculateVotes(total, votes) {
    if (total === 0) return 50;
    if (votes === 0) return 0;
    return ((votes / total) * 100).toFixed(1);
  }

  function getPercetange(votes, likes, dislikes) {
    const likesPercentage = calculateVotes(votes, likes);
    const dislikesPercentage = calculateVotes(votes, dislikes);
    return {
      likesPercentage: `${likesPercentage}%`,
      dislikesPercentage: `${dislikesPercentage}%`,
    };
  }

  class Hero {
    constructor() {
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
        this.$voteLike = this.$el.querySelector(".hero__likeButton");

        const persistedData = JSON.parse(localStorage.getItem(this.name)) || {};
        this.likes = persistedData.likes || 0;
        this.dislikes = persistedData.dislikes || 0;
        this.votes = persistedData.votes || 0;
        this.addEvents();
        this.updateBar();
        this.persistHero();
      }
    }

    addEvents() {
      const self = this;

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

      if (this.$voteLike) {
        this.$voteLike.addEventListener("click", function () {
          self.$voteEl.classList.remove(
            "hero__vote-like",
            "hero__vote-dislike"
          );
        });
      }
    }

    persistHero() {
      if (localStorage) {
        localStorage.setItem(
          this.name,
          JSON.stringify({
            likes: this.likes,
            dislikes: this.dislikes,
            votes: this.votes,
          })
        );
      }
    }

    calculateVotes(total, votes) {
      if (total === 0) return 50;
      if (votes === 0) return 0;
      return ((votes / total) * 100).toFixed(1);
    }

    updateBar() {
      const likesPercentage = getPercetange(
        this.votes,
        this.likes,
        this.dislikes
      ).likesPercentage;

      const dislikesPercentage = getPercetange(
        this.votes,
        this.likes,
        this.dislikes
      ).dislikesPercentage;

      // const { likesPercentage, dislikesPercentage } = getPercetange(
      //   this.votes,
      //   this.likes,
      //   this.dislikes
      // );

      this.$likeBar.style.width = likesPercentage;
      this.$likeBarText.innerHTML = likesPercentage;
      this.$dislikeBar.style.width = dislikesPercentage;
      this.$dislikeBarText.innerHTML = dislikesPercentage;
    }
  }

  class Card {
    constructor($el) {
      this.name = $el.getAttribute("data-name");
      const persistedData = JSON.parse(localStorage.getItem(this.name)) || {};
      this.likes = persistedData.likes || 0;
      this.dislikes = persistedData.dislikes || 0;
      this.votes = persistedData.votes || 0;
      this.$likeBar = $el.querySelector(".bar__like");
      this.$likeBarText = this.$likeBar.querySelector(".bar__number");
      this.$dislikeBar = $el.querySelector(".bar__dislike");
      this.$dislikeBarText = this.$dislikeBar.querySelector(".bar__number");
      this.updateCard();
    }

    updateCard() {
      const likesText = getPercetange(
        this.votes,
        this.likes,
        this.dislikes
      ).likesPercentage;
      const dislikesText = getPercetange(
        this.votes,
        this.likes,
        this.dislikes
      ).dislikesPercentage;

      this.$likeBar.style.width = likesText;
      this.$likeBarText.innerHTML = likesText;

      this.$dislikeBar.style.width = dislikesText;
      this.$dislikeBarText.innerHTML = dislikesText;
    }
  }

  new Hero();
  const cards = document.querySelectorAll(".card");
  if (cards) {
    cards.forEach(function (card) {
      new Card(card);
    });
  }
})();
