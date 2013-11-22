require.config({
    // set baseUrl to src/editor/
    baseUrl: '../',
    paths: {
        'jquery': 'third-party/jquery/jquery.min',
        'text': 'third-party/requirejs/text',
        'eve': 'third-party/eve/eve',
        'snap': 'third-party/snap/snap.svg-min',
        'snap.plugins': 'third-party/snap.plugins/snap.plugins',
        'snap.freeTransform': 'third-party/snap.freetransform/snap.freetransform',
        'spec': 'test/spec'
    }
});
require([
    'text',
    'spec/CSSShapesEditorSpec',
    'spec/PolygonEditorSpec',
    'spec/CircleEditorSpec',
    'spec/EllipseEditorSpec'
    ], function(){
    var env = jasmine.getEnv();
    env.addReporter(new jasmine.HtmlReporter);
    env.execute();
});