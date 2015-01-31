'use strict';

describe('bar.jumbotron', function () {

  // Templates

  var templates = {
    'default': {
      element: '<div bar-jumbotron ></div>'
    },
    'attr-title': {
      element: '<div bar-jumbotron bar-jumbotron-title="Bar Jumbotron !" ></div>'
    }
  };

  function compileDirective(template, locals) {
    template = templates[template];
    angular.extend(this.$scope,
      template.scope || templates['default'].scope || {},
      locals);
    var element = angular.element(template.element);

    element = this.$compile(element)(this.$scope);
    this.$scope.$digest();

    return element;
  }

  // Tests


  beforeEach(function () {
    module('bar.jumbotron');

    inject(function (_$injector_) {

      this.$scope = _$injector_.get('$rootScope').$new();
      this.$compile = _$injector_.get('$compile');
      this.$templateCache = _$injector_.get('$templateCache');

      this.barJumbotronConfig = _$injector_.get('barJumbotronConfig');
    });

    this.compileDirective = compileDirective;
    this.$templateCache.put(this.barJumbotronConfig.templateUrl, '');
  });

  afterEach(function () {
    this.$scope.$destroy();
  });

  describe('with default template', function () {

    it('should had the default title', function () {
      var element = this.compileDirective('default');
      expect(element.find('h1').html()).toBe('Hello World');
    });

    it('should correctly compile inner content', function () {
      var element = this.compileDirective('attr-title');
      expect(element.find('h1').html()).toBe('Bar Jumbotron !');
    });


  });

});
