export const paginationOptions = {
  usageStatistics: false,
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',

    // moveButton: (type) => {
    //   let template = '<div></div>';
    //   if (type === 'first') {
    //     template =
    //       '<a href="#" class="tui-page-btn tui-first custom-class-first">' +
    //       '<span class="tui-ico-first">first</span>' +
    //       '</a>';
    //   }
    //   if (type === 'last') {
    //     template =
    //       '<a href="#" class="tui-page-btn tui-last custom-class-last">' +
    //       '<span class="tui-ico-last">last</span>' +
    //       '</a>';
    //   }

    //   if (type === 'prev') {
    //     template =
    //       '<a href="#" class="tui-page-btn tui-prev custom-class-prev">' +
    //       '<span class="tui-ico-prev">prev</span>' +
    //       '</a>';
    //   }
    //   if (type === 'next') {
    //     template =
    //       '<a href="#" class="tui-page-btn tui-next custom-class-next">' +
    //       '<span class="tui-ico-next">next</span>' +
    //       '</a>';
    //   }

    //   return template;
    // },
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
