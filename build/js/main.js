"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}!function(){function s(e,t){return 0===e?50:0===t?0:(t/e*100).toFixed(1)}function r(e,t,i){t=s(e,t),i=s(e,i);return{likesPercentage:"".concat(t,"%"),dislikesPercentage:"".concat(i,"%")}}var e=function(){function t(){var e;_classCallCheck(this,t),this.$el=document.querySelector(".hero"),this.$el&&(this.name=this.$el.getAttribute("data-name"),this.$likeBtn=this.$el.querySelector(".hero__buttonLike"),this.$dislikeBtn=this.$el.querySelector(".hero__buttonDislike"),this.$likeBar=this.$el.querySelector(".bar__like"),this.$likeBarText=this.$likeBar.querySelector(".bar__number"),this.$dislikeBar=this.$el.querySelector(".bar__dislike"),this.$dislikeBarText=this.$dislikeBar.querySelector(".bar__number"),this.$voteEl=this.$el.querySelector(".hero__vote"),this.$voteLike=this.$el.querySelector(".hero__likeButton"),e=JSON.parse(localStorage.getItem(this.name))||{},this.likes=e.likes||0,this.dislikes=e.dislikes||0,this.votes=e.votes||0,this.addEvents(),this.updateBar(),this.persistHero())}return _createClass(t,[{key:"addEvents",value:function(){var e=this;this.$likeBtn&&this.$likeBtn.addEventListener("click",function(){e.likes+=1,e.votes+=1,e.updateBar(),e.$voteEl.classList.add("hero__vote-like"),e.persistHero()}),this.$dislikeBtn&&this.$dislikeBtn.addEventListener("click",function(){e.dislikes+=1,e.votes+=1,e.updateBar(),e.$voteEl.classList.add("hero__vote-dislike"),e.persistHero()}),this.$voteLike&&this.$voteLike.addEventListener("click",function(){e.$voteEl.classList.remove("hero__vote-like","hero__vote-dislike")})}},{key:"persistHero",value:function(){localStorage&&localStorage.setItem(this.name,JSON.stringify({likes:this.likes,dislikes:this.dislikes,votes:this.votes}))}},{key:"calculateVotes",value:function(e,t){return 0===e?50:0===t?0:(t/e*100).toFixed(1)}},{key:"updateBar",value:function(){var e=r(this.votes,this.likes,this.dislikes).likesPercentage,t=r(this.votes,this.likes,this.dislikes).dislikesPercentage;this.$likeBar.style.width=e,this.$likeBarText.innerHTML=e,this.$dislikeBar.style.width=t,this.$dislikeBarText.innerHTML=t}}]),t}(),t=function(){function i(e){_classCallCheck(this,i),this.name=e.getAttribute("data-name");var t=JSON.parse(localStorage.getItem(this.name))||{};this.likes=t.likes||0,this.dislikes=t.dislikes||0,this.votes=t.votes||0,this.$likeBar=e.querySelector(".bar__like"),this.$likeBarText=this.$likeBar.querySelector(".bar__number"),this.$dislikeBar=e.querySelector(".bar__dislike"),this.$dislikeBarText=this.$dislikeBar.querySelector(".bar__number"),this.updateCard()}return _createClass(i,[{key:"updateCard",value:function(){var e=r(this.votes,this.likes,this.dislikes).likesPercentage,t=r(this.votes,this.likes,this.dislikes).dislikesPercentage;this.$likeBar.style.width=e,this.$likeBarText.innerHTML=e,this.$dislikeBar.style.width=t,this.$dislikeBarText.innerHTML=t}}]),i}();new(function(){function e(){_classCallCheck(this,e),this.$el=document.querySelector(".notification"),this.$btn=this.$el.querySelector(".notification__button"),this.$el&&this.addEvents()}return _createClass(e,[{key:"addEvents",value:function(){var e=this;this.$btn&&this.$btn.addEventListener("click",function(){e.$el.classList.add("notification-hidden")})}}]),e}()),new e;e=document.querySelectorAll(".card");e&&e.forEach(function(e){new t(e)})}();