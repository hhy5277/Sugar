(function($) {

  modulesFinishedCallback = function(environment, results) {
    var totalTests = 0;
    var totalAssertions = 0;
    var totalFailed = 0;
    var env = $('#' + environment);
    results.each(function(module) {
      var mod = $('<ul class="module" />');
      module.results.each(function(r) {
        totalTests++;
        totalAssertions += r.assertions;
        totalFailed += r.failures.length;
        var li = $('<li class="test" />');
        var title = '<h5>' + r.name + '</h5>';
        if(r.failures.length > 0) {
          r.failures.each(function(f) {
            title += getFailureHTML(f);
          });
          var warning = r.failures.all(function(f){ return f.warning; });
          if(warning) {
            li.addClass('warning');
            li.text('.');
          } else {
            li.addClass('fail');
            li.text('F');
            title += '<p class="fail">Fail (' + r.assertions + ' assertions)</p>';
          }
        } else {
          li.text('.');
          li.addClass('pass');
          title += '<p class="pass">Pass (' + r.assertions + ' assertions)</p>';
        }

        li.attr('title', '#'+ environment +'_tip_' + totalTests);
        $(document.body).append('<div class="hidden" id="'+ environment +'_tip_' + totalTests + '">' + title + '</div>');
        mod.append(li);
      });
      $('.tests', env).append(mod);
    });

    var stats = $('.stats', env);
    stats.append($('<span class="failures">' + totalFailed + ' ' + (totalFailed == 1 ? 'failure' : 'failures') + '</span>'));
    stats.append($('<span class="tests">' + totalTests + ' ' + (totalTests == 1 ? 'test' : 'tests') + '</span>'));
    stats.append($('<span class="assertions">' + totalAssertions + ' ' + (totalAssertions == 1 ? 'assertion' : 'assertions') + '</span>'));
    //stats.append($('<span class="runtime">Completed in ' + runtime / 1000 + ' seconds</span>'));
    env.addClass('finished');
    if(totalFailed != 0){
      env.addClass('fail');
    }
    $('[title]', env).tooltip({ color: 'black' });
  }

  var getFailureHTML = function(f) {
    if(f.warning) {
      return '<p class="warning">Warning: ' + f.message + '</p>';
    } else {
      return '<p class="fail">' + f.message + ', expected: ' + f.expected + ' actual: ' + f.actual + '</p>';
    }
  };

})(jQuery);
