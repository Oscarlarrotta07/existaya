class Hero {
  constructor() {
    this.$el = document.querySelector(".hero");

    if (this.$el) {
      this.name = this.$el.getAttribute("data-name").toLowerCase();
      this.$likeBtn = this.$el.querySelector(".hero__buttonLike");
      this.$dislikeBtn = this.$el.querySelector(".hero__buttonDislike");
      this.$likeBar = this.$el.querySelector(".bar__like");
      this.$likeBarText = this.$likeBar.querySelector(".bar__number");
      this.$dislikeBar = this.$el.querySelector(".bar__dislike");
      this.$dislikeBarText = this.$dislikeBar.querySelector(".bar__number");
      this.$voteEl = this.$el.querySelector(".hero__vote");

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
    const likesPorcentage = this.calculateVotes(this.votes, this.likes);
    const dislikesPorcentage = this.calculateVotes(this.votes, this.dislikes);
    const likesText = `${likesPorcentage}%`;
    const dislikesText = `${dislikesPorcentage}%`;
    this.$likeBar.style.width = likesText;
    this.$likeBarText.innerHTML = likesText;

    this.$dislikeBar.style.width = dislikesText;
    this.$dislikeBarText.innerHTML = dislikesText;
  }
}

const hero = new Hero();
