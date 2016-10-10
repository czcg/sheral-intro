(($, hj) => {
  // coding here
  console.log(`jQuery Version: ${$.prototype.jquery}`)
  hj.initHighlightingOnLoad()

  let pageInit = {
    // 主 nav 高亮
    mainNav() {
      let curPage = window.location.pathname.split('/').reverse()[0],
        navBar = $('#mainNav')
      navBar.find('.nav-item').removeClass('active')
      navBar.find(`[href$="${curPage}"]`).addClass('active')
    },

    // Sandal Menu 设置
    subNavHandel() {
      let subNav = $('[data-track]'),
        hashStr = window.location.hash || subNav.find('a').first().attr('href'),
        subNavOffset = subNav.offset(),
        subNavWidth = subNav.outerWidth(),
        fixedGap = $('.navbar').outerHeight() + 20

      subNav.on('click', 'a', function(event) {
        let self = $(this),
          delegate = $(event.delegateTarget)

        event.preventDefault()
        hashStr = self.attr('href')
        window.location.hash = hashStr
        // 高亮
        delegate
          .find('.active').removeClass('active')
          .find('.fa-check').removeClass('fa-check').addClass('fa-circle-o')
        self
          .addClass('active')
          .children('i').removeClass('fa-circle-o').addClass('fa-check')
        // 显示右侧相应内容
        $(hashStr)
          .removeClass('jumb-fade-out').addClass('jumb-fade-in')
          .siblings().removeClass('jumb-fade-in').addClass('jumb-fade-out')
      })
      // 滚动时 fixed 左侧菜单
      $(window).on('scroll', function() {
        if ($(this).scrollTop() > fixedGap) {
          subNav.css({
            'position': 'fixed',
            'width': `${subNavWidth}px`,
            'left': `${subNavOffset.left}px`,
            'top': `${fixedGap}px`
          })
        } else {
          subNav.removeAttr('style')
        }
      })
      $(`[href="${hashStr}"]`).trigger('click')
    }
  }

  // 执行所有初始化 task
  for (let key of Object.keys(pageInit)) pageInit[key]()
})(jQuery, window.hljs)
