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
        win = $(window),
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

        // 切换不同子栏目时注意保持滚动条从头开始
        win.scrollTop(0)
      })
      // 滚动时 fixed 左侧菜单
      win.on('scroll', function() {
        if ($(this).scrollTop() > fixedGap && subNavOffset) {
          subNav.css({
            'position': 'fixed',
            'top': `${fixedGap}px`,
            'left': `${subNavOffset.left}px`,
            'width': `${subNavWidth}px`
          })
        } else {
          subNav.removeAttr('style')
        }
      })
    },
    // 点击取消遮罩层
    removeMask() {
      $(document).on('click', '.mask', function() {
        $(this).removeAttr('class')
      })
    },
    // 展示动画示例
    showAnimateDemo() {
      $(document).on('click', '[data-animation-demo]', function() {
        let
          animateName = $(this).data('animationDemo'),
          animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          animationCount = 0
        $('body').addClass('mask')
        $('.demo-ball')
          .addClass(animateName)
          .one(animationend, function() {
            animationCount ++
            if (animationCount === 2) {
              $(this).removeClass(animateName)
              window.setTimeout(function() {
                $('.mask').trigger('click')
              }, 500)
            }
          })
      })
    }
  }

  // 执行所有初始化 task
  for (let key of Object.keys(pageInit)) pageInit[key]()
})(jQuery, window.hljs)
