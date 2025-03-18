
var SubResp = new Object();
var ParseResp = new Array();
var table;
const timer = _0x314ffb => new Promise(_0x369002 => setTimeout(_0x369002, _0x314ffb));
let reportbank = [
    [
        '',
        null,
        ![]
    ],
    [
        'Sync\x20Checks',
        null,
        !![]
    ],
    [
        'Sales\x20Present\x20Past\x20365\x20Days',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=jKA7qENU1KlYvCjbg5Zjba&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=fil,vis',
        ![]
    ],
    [
        'Sales\x20by\x20Year:\x20Past\x2010\x20Years',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=amHFyexUG80uP3RDff0iqE&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=pik,vis',
        ![]
    ],
    [
        'Jumps\x20in\x20Sales\x20between\x20days',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=lRPkhV3SUHMnysYAxqltbp&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=pik,vis',
        ![]
    ],
    [
        'Sales,\x20past\x20168\x20hours',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=jgJbEMz8XHxsdqV34PercV&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vis',
        ![]
    ],
    [
        'Time\x20Since\x20Last\x20Sale',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=6J3UxePwusx7i9fSQZCaRU&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vis',
        ![]
    ],
    [
        'Sale\x20Reports',
        null,
        !![]
    ],
    [
        'Sale\x20Summary:\x20Retail\x20Alignment',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=mKmfySKWm3x1HEcay5Pvn4&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=dat,fil,vis',
        ![]
    ],
    [
        'Absent\x20Sales',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=ICMTCNBoqUDU7qani8L7my&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vse',
        ![]
    ],
    [
        'Absent\x20Sales\x20by\x20Day\x20of\x20Month',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=j36wWrRRvYUwfEBNq8VY0h&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=dat,pik,vis',
        ![]
    ],
    [
        'Absent\x20Sales\x20by\x20Day\x20of\x20Week',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=pV5q25xnyzRptoBnSSjXkr&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=dat,pik,vis',
        ![]
    ],
    [
        'Sale\x20Employee\x20vs.\x20Sale\x20Line\x20Employee',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=1SJP9Srz3IGsy2vtwAIoIN&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=pik,vis',
        ![]
    ],
    [
        'Years\x20of\x20Sales',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=EctD9g1ka8JOVuhkCjWBlb&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=dat,pik,vis',
        ![]
    ],
    [
        'Item\x20Reports',
        null,
        !![]
    ],
    [
        'Ghost\x20Stores',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=6Nod7PyHGxojSsg4WlaAFV&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=fil,vse',
        ![]
    ],
    [
        'Duplicate\x20Products\x20by\x20Name',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=I1bOLrlm2UA0MMECfVQSf2&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,vis',
        ![]
    ],
    [
        'Items\x20Archived\x20over\x20Time',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=DsIoAZEDOVMsCgmnLud3xK&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,vis,vse',
        ![]
    ],
    [
        'Negative\x20Inventory',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=wUQ4Mg7bhgfcZBiLYFMvQs&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=fil,vse',
        ![]
    ],
    [
        'Dusty\x20Configured',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=GO4jGpTtIqnsUMzAUc7iPa&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=fil,vse',
        ![]
    ],
    [
        'Dusty\x20by\x20Location',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=VWp0ci1bRDmIifaMVvDGdX&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'System\x20ID\x20For\x20Excel\x20\x20-\x20Simple',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=bQup2LErxzOH9SEu8oO6vr&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=fil,vis',
        ![]
    ],
    [
        'System\x20ID\x20For\x20Excel\x20-\x20ID\x20+\x20QOH',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=CyG5G6gnKXadwoI4aWhfAD&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'System\x20ID\x20for\x20Excel\x20-\x20ID,\x20Qoh,\x20Pivoting\x20by\x20Store',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=VVVFn4fcTiyuMjrhPOBtiv&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'QSold\x20on\x20Items',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=9MOX5G6jMcQvJ81t5SstbE&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik',
        ![]
    ],
    [
        'Qsold\x20on\x20Items\x20by\x20Store',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=6yYqZCGw5ynjNIrBzdVSgz&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik',
        ![]
    ],
    [
        'Quantities\x20in\x20Boxes',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=dJweHQB7BZcI05BVwCGwUR&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,pik,vis',
        ![]
    ],
    [
        'Hidden\x20Spaces\x20in\x20Names',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=bqTNG4NjZpSPWJE2mEbfyg&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis',
        ![]
    ],
    [
        'High-Character\x20Descriptions',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=GqWcHUb9XIpX9iUfK8h3cI&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=fil',
        ![]
    ],
    [
        'Items\x20by\x20Character\x20Length',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=CtjNbSA8A9vWOFZKF2tKIj&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,fil,pik,vis',
        ![]
    ],
    [
        'Last\x20Character\x20is\x20a\x20Space?',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=jYqwdTCWkN0CVRiOeG0MsJ&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'Forward\x20Slashes\x20in\x20Categories?',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=IPueVqn4rEbXztt2VdWA21&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis',
        ![]
    ],
    [
        'Categories\x20with\x20Forward\x20Slashes',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=NOnK7dAjsbpAs4e8aWNvjy&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'On\x20Order\x20Reports',
        null,
        !![]
    ],
    [
        'Items\x20by\x20Vendor\x20Count',
        'https://app.lightspeedanalytics.net/embed/explore/sf_on_order/cl_items_on_order?qid=g73agGz2CAqu0s1cstfp5i&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'Purchasing\x20Patterns?',
        'https://app.lightspeedanalytics.net/embed/explore/sf_on_order/cl_items_on_order?qid=j6yhli7IVTq6ZwF7V93ra1&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'Testing\x20Variance',
        null,
        !![]
    ],
    [
        '3\x20Hour\x20Typical\x20Variance',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=4HelejwbW3150JJfw[…]lightspeedanalytics.net&origin_space=315&toggle=dat,vis',
        ![]
    ],
    [
        'QSold\x20on\x20Items',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=wQnSiplBwizvXRAhhQ9QgS&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vis',
        ![]
    ],
    [
        'QSold\x20on\x20Sales',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=wQnSiplBwizvXRAhhQ9QgS&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vis',
        ![]
    ],
    [
        'Un-Included\x20Categories?',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=8UySSjNch2YjK05sxCSyVP&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,pik,vis',
        ![]
    ],
    [
        'Summary\x20Un-Included\x20Categories',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=zcvyqEQWSP4tzym6QT1Zoo&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis',
        ![]
    ],
    [
        'Positive\x20and\x20Negative\x20Included\x20Costs',
        'https://app.lightspeedanalytics.net/embed/merge?embed_domain=lightspeedanalytics.net&mid=Te3kxff1km1NrVIgMj82Fa&toggle=dat,mrp,vis',
        ![]
    ],
    [
        'Summary/\x20Positive/Negative/Included/Not-Included',
        'https://app.lightspeedanalytics.net/embed/merge?embed_domain=lightspeedanalytics.net&mid=rjxgFyMi2XNuDOG4oefIwr&toggle=dat,mrp,vis',
        ![]
    ],
    [
        'Summary/Pos&Neg/Null\x20Shops/Inc&Not\x20Inc',
        'https://app.lightspeedanalytics.net/embed/merge?embed_domain=lightspeedanalytics.net&mid=F8Y0DlWN1aRxHlQaFrLA1v&toggle=dat,mrp,vis',
        ![]
    ],
    [
        'Dynamic\x20reorders\x20/\x20Demand\x20Forecasting',
        null,
        !![]
    ],
    [
        'Will\x20Work\x20on\x20Dynamic\x20Reorders',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=kRrA4MJiT3kQoy02iqyOIN&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=vis',
        ![]
    ],
    [
        'Summary\x20of\x20Missing\x20Items',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=NG1M12mJriU13oJNNYwsbH&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis',
        ![]
    ],
    [
        'In\x20Sales\x20Range\x20/\x20Out\x20of\x20Sales\x20Range\x20by\x20Category',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=KVG9MAfIdnFL8JoEza6Ylv&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis',
        ![]
    ],
    [
        'Item\x20Details',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=u7MTpD5gsmdbdoiSqwzTpO&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik',
        ![]
    ],
    [
        'Special\x20Characters\x20in\x20Items\x20(Kind\x20of\x20Heavy)',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=4uxDE7GI5dnneev0XykzHX&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=dat,vis',
        ![]
    ],
    [
        'CLV\x20Reports',
        null,
        !![]
    ],
    [
        'Duplicate\x20Customers',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_customer_facts/customers?qid=JF46t192qBwiPR2zJ4tvXv&embed_domain=lightspeedanalytics.net&origin_space=46&toggle=dat,vis',
        ![]
    ],
    [
        'Enterprise\x20Accounts',
        null,
        !![]
    ],
    [
        'Days\x20Since\x20Last\x20Sale\x20by\x20Account',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=siFro1a365Z5DBdxO4ycyK&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=dat,pik,vis',
        ![]
    ]
];
var customdashinfo = [
    [
        'Sales\x20Present\x20Past\x20365\x20Days',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=jKA7qENU1KlYvCjbg5Zjba&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=fil,vis'
    ],
    [
        'Sales,\x20past\x20168\x20hours',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_sales/sales?qid=jgJbEMz8XHxsdqV34PercV&embed_domain=lightspeedanalytics.net&origin_space=315&toggle=vis'
    ],
    [
        'Summary\x20of\x20Missing\x20Items',
        'https://app.lightspeedanalytics.net/embed/explore/new_sf_item_metrics/items?qid=NG1M12mJriU13oJNNYwsbH&embed_domain=lightspeedanalytics.net&origin_space=54&toggle=pik,vis'
    ],
    [
        'Possible\x20Cost\x20Variance',
        'https://app.lightspeedanalytics.net/embed/merge?embed_domain=lightspeedanalytics.net&mid=VB3903Tgdqpzcjy9oXu72v&toggle=dat,mrp,pik,vis'
    ]
];
var CreateReportList = function CreateList() {
    setTimeout(function () {
        for (let _0x31e561 = 0x0; _0x31e561 < reportbank['length']; _0x31e561++) {
            var _0x563cb9 = ![];
            if (reportbank[_0x31e561][0x2] == !![]) {
                _0x563cb9 = !![];
            }
            var _0x2789d6 = document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section');
            document['createElement']('div');
            var _0x2376d7 = '';
            if (_0x563cb9 == !![]) {
                _0x2789d6['appendChild'](document['createElement']('br'));
            }
            if (_0x563cb9 != !![]) {
                _0x2376d7 = document['createElement']('a');
            } else {
                _0x2376d7 = document['createElement']('div');
            }
            var _0x44dcaa = document['createTextNode'](reportbank[_0x31e561][0x0]);
            _0x2376d7['appendChild'](_0x44dcaa);
            if (_0x563cb9 != !![]) {
                _0x2376d7['href'] = reportbank[_0x31e561][0x1] + '&title=' + reportbank[_0x31e561][0x0];
            }
            _0x2789d6['appendChild'](_0x2376d7);
            if (_0x563cb9 != !![]) {
                _0x2789d6['appendChild'](document['createElement']('br'));
            }
        }
    }, 0xbb8);
};
if (window['top'] === window['self']) {
    extendDevTools();
    deadpagedetection();
    if (window['location']['href'] == 'https://lightspeedanalytics.net/cl_accounts/settings') {
        await timer(0x2ee);
        var zNode = document['createElement']('div');
        zNode['innerHTML'] = '<button\x20id=\x22myButton\x22\x20type=\x22button\x22>' + 'Run\x20Diagnostics!</button>';
        zNode['setAttribute']('id', 'myContainer');
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div')['append'](zNode);
        document['getElementById']('myButton')['addEventListener']('click', ButtonClickAction, ![]);
        document['querySelector']('#myButton')['innerHTML'] = '<button\x20class=\x22cta\x22>\x0a\x20\x20<span>Run\x20Diagnostics!</span>\x0a\x20\x20<svg\x20width=\x2215px\x22\x20height=\x2210px\x22\x20viewBox=\x220\x200\x2013\x2010\x22>\x0a\x20\x20\x20\x20<path\x20d=\x22M1,5\x20L11,5\x22></path>\x0a\x20\x20\x20\x20<polyline\x20points=\x228\x201\x2012\x205\x208\x209\x22></polyline>\x0a\x20\x20</svg>\x0a</button>';
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section')['style']['marginBottom'] = '10px';
    } else {
        console['log']('Incorrect\x20Page');
    }
    function ButtonClickAction(_0x20b143) {
        setTimeout(function () {
            var _0x40eefc = window['open']('https://lightspeedanalytics.net/category/1/reports/42719');
            _0x40eefc['blur']();
            window['top']['focus']();
            setTimeout(function () {
                console['log'](_0x40eefc['name']);
                console['log'](_0x40eefc['close']());
            }, 0x2134);
        }, 0x64);
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section')['style']['width'] = '160%';
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section')['style']['marginLeft'] = '-25%';
        if (window['top'] === window['self']) {
            for (let _0xc92e71 = 0x0; _0xc92e71 < customdashinfo['length']; _0xc92e71++) {
                var _0x37985b = document['createElement']('iframe');
                _0x37985b['setAttribute']('src', customdashinfo[_0xc92e71][0x1] + '&title=' + customdashinfo[_0xc92e71][0x0]);
                _0x37985b['style']['width'] = '800px';
                _0x37985b['setAttribute']('sandbox', 'allow-scripts\x20allow-same-origin');
                _0x37985b['setAttribute']('id', 'iframes' + [_0xc92e71]);
                _0x37985b['style']['height'] = '400px';
                _0x37985b['style']['border'] = '2px\x20solid\x20red;';
                document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section')['appendChild'](_0x37985b);
                console['log']('Dash' + _0xc92e71 + '\x20' + customdashinfo[_0xc92e71][0x1] + '&title=' + customdashinfo[_0xc92e71][0x0]);
            }
            setTimeout(function () {
                var _0x21d6f3 = document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20p');
                delete _0x21d6f3;
                _0x21d6f3['remove']();
                _0x21d6f3 = document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div:nth-child(2)');
                delete _0x21d6f3;
                _0x21d6f3['remove']();
            }, 0x3e8);
            var _0x3bb581 = document['querySelector']('#o-wrapper\x20>\x20header');
            var _0x59528e = document['querySelector']('#o-wrapper\x20>\x20header\x20>\x20nav\x20>\x20section');
            _0x59528e['remove']();
            delete _0x59528e;
        }
        document['getElementById']('myContainer')['remove']();
        var _0x1c33e9 = document['createElement']('div');
        _0x1c33e9['innerHTML'] = '<button\x20id=\x22myButton2\x22\x20type=\x22button\x22>' + 'List\x20Reports!</button>';
        _0x1c33e9['setAttribute']('id', 'myContainer2');
        document['body']['appendChild'](_0x1c33e9);
        document['getElementById']('myButton2')['addEventListener']('click', _0x4d89a4, ![]);
        document['querySelector']('#myButton2')['innerHTML'] = '<button\x20class=\x22cta\x22>\x0a\x20\x20<span>List\x20Reports!</span>\x0a\x20\x20<svg\x20width=\x2215px\x22\x20height=\x2210px\x22\x20viewBox=\x220\x200\x2013\x2010\x22>\x0a\x20\x20\x20\x20<path\x20d=\x22M1,5\x20L11,5\x22></path>\x0a\x20\x20\x20\x20<polyline\x20points=\x228\x201\x2012\x205\x208\x209\x22></polyline>\x0a\x20\x20</svg>\x0a</button>';
        if (document['URL'] == 'https://lightspeedanalytics.net/cl_accounts/settings') {
            Engine();
        }
        function _0x4d89a4(_0x522584) {
            CreateReportList();
            document['getElementById']('myContainer2')['remove']();
        }
    }
    document['body']['appendChild'](document['createElement']('style'))['textContent'] = '\x0a\x0a.cta\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20margin:\x20auto;\x0a\x20\x20padding:\x2012px\x2018px;\x0a\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20border:\x20none;\x0a\x20\x20background:\x20none;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20background-color:\x20transparent;\x0a}\x0a\x0a.cta:before\x20{\x0a\x20\x20content:\x20\x22\x22;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20display:\x20block;\x0a\x20\x20border-radius:\x2050px;\x0a\x20\x20background:\x20#b1dae7;\x0a\x20\x20width:\x2045px;\x0a\x20\x20height:\x2045px;\x0a\x20\x20transition:\x20all\x200.3s\x20ease;\x0a}\x0a\x0a.cta\x20span\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20font-family:\x20\x22Ubuntu\x22,\x20sans-serif;\x0a\x20\x20font-size:\x2018px;\x0a\x20\x20font-weight:\x20700;\x0a\x20\x20letter-spacing:\x200.05em;\x0a\x20\x20color:\x20#234567;\x0a}\x0a\x0a.cta\x20svg\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20top:\x200;\x0a\x20\x20margin-left:\x2010px;\x0a\x20\x20fill:\x20none;\x0a\x20\x20stroke-linecap:\x20round;\x0a\x20\x20stroke-linejoin:\x20round;\x0a\x20\x20stroke:\x20#234567;\x0a\x20\x20stroke-width:\x202;\x0a\x20\x20transform:\x20translateX(-5px);\x0a\x20\x20transition:\x20all\x200.3s\x20ease;\x0a}\x0a\x0a.cta:hover:before\x20{\x0a\x20\x20width:\x20100%;\x0a\x20\x20background:\x20#b1dae7;\x0a}\x0a\x0a.cta:hover\x20svg\x20{\x0a\x20\x20transform:\x20translateX(0);\x0a}\x0a\x0a.cta:active\x20{\x0a\x20\x20transform:\x20scale(0.95);\x0a}\x0a#myContainer2\x20{\x0a\x20\x20position:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20absolute;\x0a\x20\x20top:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200;\x0a\x20\x20left:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100px;\x0a\x0a}\x0a.cta\x20{\x0aposition:\x20relative;\x0amargin:\x20auto;\x0apadding:\x2012px\x2018px;\x0atransition:\x20all\x200.2s\x20ease;\x0aborder:\x20none;\x0abackground:\x20none;\x0acursor:\x20pointer;\x0a}\x0a\x0a.cta:before\x20{\x0acontent:\x20\x22\x22;\x0aposition:\x20absolute;\x0atop:\x200;\x0aleft:\x200;\x0adisplay:\x20block;\x0aborder-radius:\x2050px;\x0abackground:\x20#b1dae7;\x0awidth:\x2045px;\x0aheight:\x2045px;\x0atransition:\x20all\x200.3s\x20ease;\x0a}\x0a\x0a.cta\x20span\x20{\x0aposition:\x20relative;\x0afont-family:\x20\x22Ubuntu\x22,\x20sans-serif;\x0afont-size:\x2018px;\x0afont-weight:\x20700;\x0aletter-spacing:\x200.05em;\x0acolor:\x20#234567;\x0a}\x0a\x0a.cta\x20svg\x20{\x0aposition:\x20relative;\x0atop:\x200;\x0amargin-left:\x2010px;\x0afill:\x20none;\x0astroke-linecap:\x20round;\x0astroke-linejoin:\x20round;\x0astroke:\x20#234567;\x0astroke-width:\x202;\x0atransform:\x20translateX(-5px);\x0atransition:\x20all\x200.3s\x20ease;\x0a}\x0a\x0a.cta:hover:before\x20{\x0awidth:\x20100%;\x0abackground:\x20#b1dae7;\x0a}\x0a\x0a.cta:hover\x20svg\x20{\x0atransform:\x20translateX(0);\x0a}\x0a\x0a.cta:active\x20{\x0atransform:\x20scale(0.95);\x0a}';
} else {
    if (document['documentElement']['clientWidth'] == 0x320) {
        setTimeout(function () {
            try {
                let _0xe3300b = document['URL'];
                var _0x4c6922 = _0xe3300b['includes']('merge');
                if (_0x4c6922 == ![]) {
                    document['querySelector']('#lk-react-container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20explore-subrouter\x20>\x20ui-view\x20>\x20lk-explore-dataflux\x20>\x20div.center\x20>\x20lk-explore-content\x20>\x20div\x20>\x20div\x20>\x20lk-filter-pane')['remove']();
                    document['querySelector']('#lk-react-container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20explore-subrouter\x20>\x20ui-view\x20>\x20lk-explore-dataflux\x20>\x20div.center\x20>\x20lk-explore-content\x20>\x20div\x20>\x20div\x20>\x20lk-vis-pane\x20>\x20lk-expandable-pane\x20>\x20div.titlebar.open')['remove']();
                    document['querySelector']('#lk-react-container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20explore-subrouter\x20>\x20ui-view\x20>\x20lk-explore-dataflux\x20>\x20div.center\x20>\x20lk-explore-content\x20>\x20div\x20>\x20div\x20>\x20lk-data-pane')['remove']();
                    document['querySelector']('#lk-react-container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20explore-subrouter\x20>\x20ui-view\x20>\x20lk-explore-dataflux\x20>\x20div.center\x20>\x20lk-expandable-sidebar')['remove']();
                    document['querySelector']('#lk-react-container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20explore-subrouter\x20>\x20ui-view\x20>\x20lk-explore-dataflux\x20>\x20lk-explore-header\x20>\x20div.title-controls\x20>\x20lk-explore-header-menu')['remove']();
                } else {
                    document['querySelector']('#lk-embed-container\x20>\x20lk-merge\x20>\x20div.center\x20>\x20lk-merge-content\x20>\x20div\x20>\x20div\x20>\x20lk-merge-rules-pane')['remove']();
                    document['querySelector']('#lk-embed-container\x20>\x20lk-merge\x20>\x20div.center\x20>\x20lk-expandable-sidebar')['remove']();
                    document['querySelector']('#lk-embed-container\x20>\x20lk-merge\x20>\x20div.center\x20>\x20lk-merge-content\x20>\x20div\x20>\x20div\x20>\x20lk-data-pane')['remove']();
                    document['querySelector']('#lk-embed-container\x20>\x20lk-merge\x20>\x20div.center\x20>\x20lk-merge-content\x20>\x20div\x20>\x20div\x20>\x20lk-vis-pane\x20>\x20lk-expandable-pane\x20>\x20div.titlebar.open')['remove']();
                }
            } catch (_0x4e11ab) {
                console['log'](document['URL'] + '\x0a' + _0x4c6922 + _0x4e11ab);
            }
        }, 0x1f40);
    }
}
async function GetSubs() {
    await fetch('https://lightspeedanalytics.net/account-admin/subscriptions', {
        'headers': {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'upgrade-insecure-requests': '1'
        },
        'referrer': 'https://lightspeedanalytics.net/enterprises/33',
        'referrerPolicy': 'strict-origin-when-cross-origin',
        'body': null,
        'method': 'GET',
        'mode': 'cors',
        'credentials': 'same-origin'
    })['then'](function (_0x388939) {
        return _0x388939['text']();
    })['then'](function (_0x4777c1) {
        SubResp = _0x4777c1;
    });
}
function Slicer(_0x4dd3d6) {
    _0x4dd3d6 = _0x4dd3d6['split']('table-responsive')[0x1];
    _0x4dd3d6 = _0x4dd3d6['split']('/section')[0x0];
    _0x4dd3d6 = _0x4dd3d6['split']('</tr>');
    console['log'](_0x4dd3d6);
    return _0x4dd3d6;
}
function CleanResp(_0x4507d1) {
    for (let _0x311dd2 = 0x0; _0x311dd2 < _0x4507d1['length']; _0x311dd2++) {
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['replaceAll']('\x20', '');
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['replaceAll']('\x0a', '');
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['replaceAll']('<td>', '');
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['replaceAll']('<tr>', '');
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['replaceAll']('<tdclass=', '');
        _0x4507d1[_0x311dd2] = _0x4507d1[_0x311dd2]['split']('</td>');
    }
    console['log'](_0x4507d1);
    _0x4507d1 = _0x4507d1;
}
function CleanSubArray(_0x34c39a) {
    for (let _0x5eee81 = 0x0; _0x5eee81 < _0x34c39a['length']; _0x5eee81++) {
        _0x34c39a[_0x5eee81]['pop']();
        _0x34c39a[_0x5eee81]['pop']();
        try {
            _0x34c39a[_0x5eee81][0x3] = _0x34c39a[_0x5eee81][0x3]['substring'](0x2e, _0x34c39a[_0x5eee81][0x3]['length'] - 0x1);
        } catch {
            null;
        }
        for (let _0x41d050 = 0x0; _0x41d050 < _0x34c39a[_0x5eee81]['length']; _0x41d050++) {
            try {
                _0x34c39a[_0x5eee81][_0x41d050] = _0x34c39a[_0x5eee81][_0x41d050]['split']('\x22>');
            } catch {
                null;
            }
            try {
                _0x34c39a[_0x5eee81][_0x41d050] = _0x34c39a[_0x5eee81][_0x41d050]['split']('\x22subscriptions\x22>');
            } catch {
                null;
            }
            try {
                _0x34c39a[_0x5eee81][_0x41d050] = _0x34c39a[_0x5eee81][_0x41d050]['split']('\x22subscriptions\x22>');
            } catch {
                null;
            }
            try {
                if (_0x34c39a[_0x5eee81][_0x41d050]['length'] == 0x2) {
                    _0x34c39a[_0x5eee81][_0x41d050] = _0x34c39a[_0x5eee81][_0x41d050][0x1];
                } else {
                    _0x34c39a[_0x5eee81][_0x41d050] = _0x34c39a[_0x5eee81][_0x41d050][0x0];
                }
            } catch {
                null;
            }
            if (_0x34c39a[_0x5eee81][0x3]['length'] == 0xf) {
                _0x34c39a[_0x5eee81][0x3] = 'enabled';
            }
        }
    }
    console['log'](_0x34c39a);
    _0x34c39a = _0x34c39a;
}
function BuildTable(_0x39f3c0) {
    var _0x1edd27 = _0x39f3c0;
    table = document['createElement']('table');
    for (let _0xffcc06 of _0x1edd27) {
        table['insertRow']();
        for (let _0x2046c9 of _0xffcc06) {
            let _0x58f489 = table['rows'][table['rows']['length'] - 0x1]['insertCell']();
            _0x58f489['textContent'] = _0x2046c9;
        }
    }
    table['style']['border'] = '1px\x20solid\x20red';
    table['setAttribute']('id', 'maintable');
    document['querySelector']('#react-root\x20>\x20div\x20>\x20div\x20>\x20section')['append'](table);
}
function CheckEmails() {
    let _0x28d440 = 0x0;
    try {
        _0x28d440 = document['querySelector']('#maintable\x20>\x20tbody')['childElementCount'];
    } catch {
        _0x28d440 = 0x1;
    }
    for (let _0x58278d = 0x1; _0x58278d < _0x28d440; _0x58278d++) {
        if (_0x58278d != 0x1) {
            let _0x4525d3 = document['querySelector']('#maintable\x20>\x20tbody\x20>\x20tr:nth-child(' + _0x58278d + ')\x20>\x20td:nth-child(1)');
            console['log'](isValidEmail(_0x4525d3['innerText']));
            if (isValidEmail(_0x4525d3['innerText']) == ![]) {
                _0x4525d3['style']['backgroundColor'] = 'red';
            }
        }
    }
}
function isValidEmail(_0x18f200) {
    const _0x34ad38 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return _0x34ad38['test'](_0x18f200);
}
async function Engine() {
    await GetSubs();
    ParseResp = Slicer(SubResp);
    ParseResp['shift']();
    CleanResp(ParseResp);
    CleanSubArray(ParseResp);
    ParseResp['unshift']([
        'Recepient\x20Email',
        'Report\x20Name',
        'Sending\x20Freq',
        'Alert\x20Mode?',
        'Subscription\x20Creator'
    ]);
    BuildTable(ParseResp);
    CheckEmails();
}
const dangerlist = [
    '111402',
    '109915',
    '197906',
    '133591',
    '149781',
    '133226',
    '208132',
    '195293',
    '126509',
    '142639',
    '194978',
    '118053',
    '186370',
    '229567',
    '152372',
    '222326',
    '131391',
    '141454',
    '122128',
    '123038',
    '187768',
    '62257',
    '124935',
    '139140',
    '102652',
    '189174',
    '157632',
    '162968',
    '175828',
    '160865',
    '159923',
    '186393',
    '177848',
    '122547',
    '133041',
    '131485',
    '36298',
    '227706',
    '163993',
    '114931',
    '167234',
    '30168',
    '110083',
    '266886',
    '58233',
    '163271',
    '175006',
    '193287',
    '194827',
    '173386',
    '169993',
    '196503',
    '118570',
    '248811',
    '164874',
    '93799',
    '265152',
    '245937',
    '131995',
    '161855',
    '179837',
    '130117',
    '150713',
    '222537',
    '94299',
    '169749',
    '180116',
    '137750',
    '174571',
    '82432',
    '123601',
    '123838',
    '39470',
    '152081',
    '137674',
    '32498',
    '63535',
    '155990',
    '136514',
    '151208',
    '148517',
    '44148',
    '141788',
    '216062',
    '237716',
    '28512',
    '171880',
    '123426',
    '224044',
    '151711',
    '186341',
    '249156',
    '182558',
    '107330',
    '215073',
    '132752',
    '182868',
    '166417',
    '105425',
    '178593',
    '160037',
    '30740',
    '208742',
    '100108',
    '109675',
    '126970',
    '87859',
    '198314',
    '110570',
    '169034',
    '270963',
    '162758',
    '110109',
    '131080',
    '195235',
    '212939',
    '161038',
    '177067',
    '182663',
    '138388',
    '112141',
    '129860',
    '127567',
    '219143',
    '193966',
    '124816',
    '218456',
    '195189',
    '268813',
    '232594',
    '232439',
    '213686',
    '179545',
    '29008',
    '134326',
    '147719',
    '103040',
    '151955',
    '161895',
    '236852',
    '156250',
    '165959',
    '137738',
    '132150',
    '151892',
    '98493',
    '228250',
    '87419',
    '169546',
    '265729',
    '148534',
    '189924',
    '158742',
    '233375',
    '81559',
    '120562',
    '164187',
    '192503',
    '199937',
    '142572',
    '243742',
    '159748',
    '231529',
    '27602',
    '143520',
    '156400',
    '227276',
    '167168',
    '92633',
    '162106',
    '201886',
    '145982',
    '179126',
    '133039',
    '61853',
    '211121',
    '178129',
    '134844',
    '209309',
    '176165',
    '94255',
    '167784',
    '254145',
    '115083',
    '145509',
    '153698',
    '89113',
    '132561',
    '229455',
    '195757',
    '140680',
    '54919',
    '182675',
    '248406',
    '136269',
    '232573',
    '126579',
    '231470',
    '148406',
    '190231',
    '270478',
    '218564',
    '164954',
    '137053',
    '62963',
    '143959',
    '111941',
    '121727',
    '123251',
    '172625',
    '283743',
    '158699',
    '233582',
    '102884',
    '179363',
    '194311',
    '159190',
    '135856',
    '148159',
    '110556',
    '126282',
    '243300',
    '81403',
    '245920',
    '97061',
    '199080',
    '182619',
    '159269',
    '92069',
    '191701',
    '63747',
    '80613',
    '128141',
    '45095',
    '239603',
    '222272',
    '144507',
    '82332',
    '177047',
    '163636',
    '46560',
    '103249',
    '197815',
    '141185',
    '193542',
    '124082',
    '290418',
    '116560',
    '140516',
    '119075',
    '108678',
    '179978',
    '260883',
    '154904',
    '122749',
    '217015',
    '96237',
    '149176',
    '143874',
    '168086',
    '49565',
    '122809',
    '254947',
    '190369',
    '28618',
    '286376',
    '68923',
    '135914',
    '179460',
    '276128',
    '128588',
    '253021',
    '263223',
    '184426',
    '134762',
    '119871',
    '150673',
    '140692',
    '94111',
    '147729',
    '25477',
    '93609',
    '175052',
    '137124',
    '147365',
    '165355',
    '169936',
    '144628',
    '238968',
    '138025',
    '189276',
    '160122',
    '271900',
    '124247',
    '273177',
    '165804',
    '226461',
    '233042',
    '166696',
    '220315',
    '196466',
    '222547',
    '227778',
    '65977',
    '166016',
    '166539',
    '185963',
    '206817',
    '85689',
    '170399',
    '177713',
    '231932',
    '194360',
    '226942',
    '173604',
    '88255',
    '115996',
    '237061',
    '221456',
    '179368',
    '120483',
    '38510',
    '125340',
    '222278',
    '124758',
    '148780',
    '190807',
    '33034',
    '147138',
    '109813',
    '174438',
    '221246',
    '198332',
    '190322',
    '219988',
    '132527',
    '140868',
    '167710',
    '43168',
    '161616',
    '121916',
    '50097',
    '76409',
    '185022',
    '135637',
    '267169',
    '50179',
    '209108',
    '169627',
    '55619',
    '220278',
    '133697',
    '215693',
    '179165',
    '235990',
    '140928',
    '215849',
    '294247',
    '297173',
    '226320',
    '249521',
    '266584',
    '207850',
    '243285',
    '75999',
    '279130',
    '135354',
    '219600',
    '215145',
    '225807',
    '33034',
    '241797',
    '181782',
    '278006',
    '143614',
    '23131',
    '143586',
    '131076',
    '212949',
    '125294',
    '131992',
    '65689',
    '221146',
    '178312',
    '40846',
    '185037',
    '207496',
    '209397',
    '71805',
    '111891',
    '245905',
    '228290',
    '105791',
    '195308',
    '176732',
    '49005',
    '235842',
    '33034',
    '169983',
    '287048',
    '91513',
    '228864',
    '66663',
    '211178',
    '196285',
    '223948',
    '116300',
    '143738',
    '237970',
    '149181',
    '158036',
    '282794',
    '115391',
    '181942',
    '148358',
    '167438',
    '229857',
    '133214',
    '229862',
    '210626',
    '182793',
    '147658',
    '193329',
    '190803',
    '174198',
    '48347',
    '286902',
    '126221',
    '229751',
    '247202',
    '262983',
    '184495',
    '160490',
    '206958',
    '193608',
    '134591',
    '242828',
    '117440',
    '156328',
    '188325',
    '167610',
    '256665',
    '100050',
    '291070',
    '213742',
    '46708',
    '293745',
    '178435',
    '181741',
    '222492',
    '181724',
    '117564',
    '199854',
    '123398',
    '110091',
    '105101',
    '233332',
    '194816',
    '28500',
    '215491',
    '90669',
    '253705',
    '140504',
    '135441',
    '246520',
    '217847',
    '33034',
    '158904',
    '122499',
    '189615',
    '88421',
    '182373',
    '135118',
    '296790',
    '177689',
    '152800',
    '88805',
    '184988',
    '104691',
    '132480',
    '179464',
    '149730',
    '143189',
    '25551',
    '158700',
    '267069',
    '202046',
    '26380',
    '57723',
    '192761',
    '177520',
    '223158',
    '151431',
    '63655',
    '150100',
    '88421',
    '179251',
    '271731',
    '97093',
    '144879',
    '197452',
    '138585',
    '253107',
    '121701',
    '241873',
    '163850',
    '197918',
    '222102',
    '146177',
    '132016',
    '151478',
    '106095',
    '218429',
    '129157',
    '167204',
    '119124',
    '25812',
    '229608',
    '213205',
    '139338',
    '139474',
    '142698',
    '181529',
    '122861',
    '243217',
    '89007',
    '121311',
    '93875',
    '137376',
    '152644',
    '158439',
    '123078',
    '103255',
    '186188',
    '170797',
    '143552',
    '91886',
    '87161',
    '261003',
    '183758',
    '9381',
    '30974',
    '144957',
    '124777',
    '154165',
    '179682',
    '177781',
    '197491',
    '234579',
    '118022',
    '27452',
    '189434',
    '125829',
    '249946',
    '193717',
    '267037',
    '142010',
    '268459',
    '200233',
    '190147',
    '110235',
    '121308',
    '164905',
    '253913',
    '181721',
    '145155',
    '240080',
    '126864',
    '232257',
    '162127',
    '117300',
    '173990',
    '240997',
    '279704',
    '181151',
    '109553',
    '148712',
    '67211',
    '244897',
    '67879',
    '283238',
    '296187',
    '40180',
    '227595',
    '145986',
    '117432',
    '278553',
    '126888',
    '143219',
    '171646',
    '145952',
    '33034',
    '297739',
    '121823',
    '130763',
    '144221',
    '26900',
    '123135',
    '106581',
    '146924',
    '167921',
    '212119',
    '174424',
    '195184',
    '235102',
    '134765',
    '139552',
    '190554',
    '191272',
    '135168',
    '34014',
    '88421',
    '53604',
    '128258',
    '192125',
    '167762',
    '93187',
    '144809',
    '70989',
    '290668',
    '266153',
    '222059',
    '161542',
    '225002',
    '188627',
    '101238',
    '254346',
    '183896',
    '214387',
    '137262',
    '139264',
    '198075',
    '59881',
    '94959',
    '183059',
    '91472',
    '227494',
    '253618',
    '142925',
    '137056',
    '255361',
    '153075',
    '212230',
    '176361',
    '169925',
    '193361',
    '163250',
    '100828',
    '191166',
    '137830',
    '151661',
    '136552',
    '132981',
    '231671',
    '150640',
    '119991',
    '253223',
    '246660',
    '220424',
    '194766',
    '174046',
    '62149',
    '223676',
    '190769',
    '224189',
    '88421',
    '270845',
    '235554',
    '249149',
    '172247',
    '244262',
    '215642',
    '234992',
    '171096',
    '232368',
    '288767',
    '222628',
    '245250',
    '39442',
    '167328',
    '92699',
    '137488',
    '169402',
    '119047',
    '227597',
    '179224',
    '124065',
    '91158',
    '189015',
    '229149',
    '102524',
    '197020',
    '140216',
    '287816',
    '171886',
    '240500',
    '165311',
    '127770',
    '292643',
    '216341',
    '227460',
    '33034',
    '176372',
    '119686',
    '79165',
    '193562',
    '172635',
    '134254',
    '159337',
    '208790',
    '251072',
    '35270',
    '109300',
    '265294',
    '78263',
    '210309',
    '212074',
    '85147',
    '229295',
    '128716',
    '236256',
    '174722',
    '219064',
    '288381',
    '270017',
    '162254',
    '257905',
    '121841',
    '244840',
    '165993',
    '208288',
    '218049',
    '209450',
    '100412',
    '104745',
    '95071',
    '208195',
    '123820',
    '237751',
    '285979',
    '160435',
    '107706',
    '251142',
    '107264',
    '190561',
    '189945',
    '130798',
    '219738',
    '271446',
    '168424',
    '215929',
    '137699',
    '77333',
    '121139',
    '170849',
    '82142',
    '191645',
    '222346',
    '79741',
    '129103',
    '127002',
    '103507',
    '87401',
    '121619',
    '33034',
    '221139',
    '135411',
    '197770',
    '242374',
    '174086',
    '147851',
    '178004',
    '211276',
    '170881',
    '102908',
    '257286',
    '129029',
    '161657',
    '28870',
    '123823',
    '168676',
    '212396',
    '238449',
    '253451',
    '156779',
    '282199',
    '210170',
    '219270',
    '123042',
    '211173',
    '53504',
    '180270',
    '172248',
    '119225',
    '200728',
    '192135',
    '193201',
    '221816',
    '261092',
    '120605',
    '229267',
    '155477',
    '195626',
    '118051',
    '86335',
    '156815',
    '118365',
    '98187',
    '241220',
    '276311',
    '191854',
    '214172',
    '77579',
    '244137',
    '247358',
    '137392',
    '76175',
    '37658',
    '222472',
    '171177',
    '168992',
    '96485',
    '88233',
    '54955',
    '216254',
    '126237',
    '236370',
    '126587',
    '135266',
    '212910',
    '12948',
    '147027',
    '68754',
    '174677',
    '142160',
    '167882',
    '173221',
    '103723',
    '144668',
    '228507',
    '14316',
    '280340',
    '162115',
    '190270',
    '181246',
    '169950',
    '119268',
    '118892',
    '178085',
    '50783',
    '211213',
    '86531',
    '219238',
    '180708',
    '88421',
    '82188',
    '128387',
    '165678',
    '192506',
    '82802',
    '139554',
    '193456',
    '80133',
    '219520',
    '107186',
    '26966',
    '230538',
    '142989',
    '184560',
    '109078',
    '139302',
    '169601',
    '267348',
    '188027',
    '120204',
    '79145',
    '92375',
    '122554',
    '209387',
    '260743',
    '151643',
    '94425',
    '276888',
    '122964',
    '193523',
    '297284',
    '234747',
    '156467',
    '145099',
    '156277',
    '221015',
    '81247',
    '103237',
    '175138',
    '113513',
    '121802',
    '216967',
    '92575',
    '219067',
    '252886',
    '197891',
    '150042',
    '287212',
    '229894',
    '150645',
    '47362',
    '141421',
    '188437',
    '218914',
    '178983',
    '178478',
    '64387',
    '275691',
    '143215',
    '138904',
    '173850',
    '123984',
    '162139',
    '115734',
    '116248',
    '202368',
    '175408',
    '130371',
    '92173',
    '253819',
    '222429',
    '87301',
    '175691',
    '208765',
    '196499',
    '147600',
    '99916',
    '248985',
    '219640',
    '136020',
    '143463',
    '190706',
    '177281',
    '246540',
    '33034',
    '174059',
    '261599',
    '119035',
    '155718',
    '266152',
    '76213',
    '137010',
    '88421',
    '36312',
    '98259',
    '39174',
    '158026',
    '236310',
    '71545',
    '235906',
    '276916',
    '170678',
    '118172',
    '124639',
    '190501',
    '93595',
    '208854',
    '211721',
    '28324',
    '260487',
    '165796',
    '126295',
    '265726',
    '219881',
    '170887',
    '232337',
    '231383',
    '172957',
    '174845',
    '212942',
    '183769',
    '127080',
    '171385',
    '157171',
    '188583',
    '175941',
    '241421',
    '189702',
    '151482',
    '69861',
    '190630',
    '251503',
    '137885',
    '168387',
    '241136',
    '297754',
    '194760',
    '144812',
    '239977',
    '140754',
    '136497',
    '282941',
    '280654',
    '150421',
    '163839',
    '157958',
    '224491',
    '120499',
    '177959',
    '125192',
    '26850',
    '152743',
    '175754',
    '244846',
    '240266',
    '28080',
    '168536',
    '221985',
    '173580',
    '243195',
    '147838',
    '161614',
    '117110',
    '231575',
    '219675',
    '272199',
    '172404',
    '84092',
    '215939',
    '135910',
    '212176',
    '271368',
    '283664',
    '244965',
    '175744',
    '154261',
    '114941',
    '127004',
    '93557',
    '167191',
    '251708',
    '291364',
    '218452',
    '135900',
    '109278',
    '98674',
    '238255',
    '194433',
    '263633',
    '256762',
    '100252',
    '236849',
    '191647',
    '200447',
    '223525',
    '224631',
    '169431',
    '123130',
    '197079',
    '75715',
    '231567',
    '142901',
    '254171',
    '139657',
    '118551',
    '144868',
    '172722',
    '257835',
    '215990',
    '168310',
    '128328',
    '246822',
    '172608',
    '94953',
    '288540',
    '29898',
    '161501',
    '294690',
    '111445',
    '214078',
    '33034',
    '167777',
    '192884',
    '182904',
    '119753',
    '155470',
    '119108',
    '214661',
    '122825',
    '174346',
    '160350',
    '185121',
    '144454',
    '41170',
    '164100',
    '29256',
    '194290',
    '214606',
    '176240',
    '245370',
    '190208',
    '227061',
    '116839',
    '160067',
    '137071',
    '169189',
    '112031',
    '222675',
    '180887',
    '222731',
    '250962',
    '101540',
    '128367',
    '276410',
    '116609',
    '143719',
    '215026',
    '177048',
    '198822',
    '161232',
    '124555',
    '66719',
    '130923',
    '289258',
    '119684',
    '33340',
    '123992',
    '188699',
    '208210',
    '72352',
    '173322',
    '243923',
    '161268',
    '271648',
    '182974',
    '196814',
    '232482',
    '178801',
    '159928',
    '135192',
    '139705',
    '106207',
    '27972',
    '135070',
    '147759',
    '104307',
    '85119',
    '77421',
    '118409',
    '82480',
    '261707',
    '183436',
    '182493',
    '216936',
    '174430',
    '165395',
    '200265',
    '259242',
    '170053',
    '176343',
    '68375',
    '192681',
    '210751',
    '174361',
    '233804',
    '239952',
    '189799',
    '130215',
    '34800',
    '173283',
    '219282',
    '173079',
    '190661',
    '120332',
    '247319',
    '217311',
    '245423',
    '147803',
    '61315',
    '143248',
    '57195',
    '197312',
    '145740',
    '117992',
    '153547',
    '30729',
    '29354',
    '167679',
    '96305',
    '165962',
    '171170',
    '244489',
    '84643',
    '27958',
    '124894',
    '178285',
    '215071',
    '188109',
    '122004',
    '157814',
    '156740',
    '215192',
    '168430',
    '192029',
    '181434',
    '182977',
    '259827',
    '136998',
    '69551',
    '118454',
    '67953',
    '30148',
    '218803',
    '276135',
    '225208',
    '167269',
    '127245',
    '95111',
    '145482',
    '250825',
    '212397',
    '179030',
    '195175',
    '57763',
    '161679',
    '117602',
    '269061',
    '132233',
    '141455',
    '269240',
    '192554',
    '218534',
    '207093',
    '138103',
    '114391',
    '158733',
    '227044',
    '151029',
    '58429',
    '181543',
    '151995',
    '97133',
    '179615',
    '153045',
    '19694',
    '25653',
    '184219',
    '193810',
    '211922',
    '91148',
    '157147',
    '167457',
    '219577',
    '197433',
    '155363',
    '136546',
    '190868',
    '184208',
    '117852',
    '262336',
    '177569',
    '194994',
    '199654',
    '187841',
    '173098',
    '242978',
    '77981',
    '195267',
    '190809',
    '155245',
    '49871',
    '89009',
    '186415',
    '208426',
    '29248',
    '144065',
    '251778',
    '88421',
    '27108',
    '255019',
    '209973',
    '156510',
    '110351',
    '121309',
    '84821',
    '161254',
    '155623',
    '145943',
    '239942',
    '250415',
    '177648',
    '158088',
    '25393',
    '214199',
    '102168',
    '121892',
    '129238',
    '147903',
    '266484',
    '178440',
    '178686',
    '145145',
    '122081',
    '66777',
    '164944',
    '173480',
    '226097',
    '160538',
    '174335',
    '217090',
    '111989',
    '163524',
    '182082',
    '242407',
    '86469',
    '191179',
    '128698',
    '257926',
    '115497',
    '218296',
    '243931',
    '100780',
    '200221',
    '251316',
    '177108',
    '233770',
    '196975',
    '127021',
    '153518',
    '208109',
    '190426',
    '200191',
    '199115',
    '144370',
    '294669',
    '88421',
    '178286',
    '143133',
    '190828',
    '25653',
    '137725',
    '193585',
    '251313',
    '206863',
    '119256',
    '150787',
    '239833',
    '254077',
    '179616',
    '195155',
    '188913',
    '287023',
    '176230',
    '142934',
    '25653',
    '86263',
    '125480',
    '242812',
    '182243',
    '164486',
    '117544',
    '144603',
    '233446',
    '160257',
    '36440',
    '196641',
    '165952',
    '214927',
    '247316',
    '136314',
    '55915',
    '95165',
    '213449',
    '86445',
    '31030',
    '100902',
    '270599',
    '228660',
    '172354',
    '247175',
    '154441',
    '227780',
    '25653',
    '186375',
    '142273',
    '230050',
    '191664',
    '168461',
    '224462',
    '287384',
    '199132',
    '28674',
    '158054',
    '158758',
    '187943',
    '65129',
    '114313',
    '63547',
    '103749',
    '121289',
    '212055',
    '150171',
    '189974',
    '171766',
    '160055',
    '218136',
    '117446',
    '126907',
    '125893',
    '220839',
    '219629',
    '163233',
    '141260',
    '190732',
    '33034',
    '144589',
    '226122',
    '119304',
    '144123',
    '246359',
    '148782',
    '164098',
    '143541',
    '244260',
    '176797',
    '226697',
    '128781',
    '138391',
    '154140',
    '256184',
    '3011',
    '144560',
    '127921',
    '161531',
    '244429',
    '78759',
    '301700',
    '167995',
    '218217',
    '139395',
    '132432',
    '30697',
    '249099',
    '208588',
    '181707',
    '231035',
    '196526',
    '143752',
    '160727',
    '174349',
    '117267',
    '246617',
    '25653',
    '230358',
    '228113',
    '189935',
    '141209',
    '197809',
    '111763',
    '144883',
    '144733',
    '267909',
    '99918',
    '178952',
    '88421',
    '30427',
    '199097',
    '177234',
    '137724',
    '182994',
    '122264',
    '163759',
    '164077',
    '259220',
    '216416',
    '129633',
    '160028',
    '173426',
    '280252',
    '98844',
    '200390',
    '177550',
    '248823',
    '195692',
    '185458',
    '190513',
    '25653',
    '124699',
    '70799',
    '30427',
    '145668',
    '244112',
    '244627',
    '244662',
    '256169',
    '215563',
    '25653',
    '242365',
    '173449',
    '265781',
    '228967',
    '106279',
    '217537',
    '149956',
    '189766',
    '164198',
    '160635',
    '210919',
    '213870',
    '190421',
    '28988',
    '244036',
    '25696',
    '167174',
    '238939',
    '216871',
    '210005',
    '144443',
    '178045',
    '112381',
    '115375',
    '159686',
    '86669',
    '240034',
    '33502',
    '174300',
    '88421',
    '101284',
    '224710',
    '238391',
    '219682',
    '127151',
    '278833',
    '41629',
    '131663',
    '244493',
    '235428',
    '182689',
    '123883',
    '48997',
    '259278',
    '71453',
    '165168',
    '300258',
    '145362',
    '44204',
    '163165',
    '235222',
    '232344',
    '125665',
    '140587',
    '47813',
    '130774',
    '278237',
    '245103',
    '63167',
    '198736',
    '243840',
    '292471',
    '71365',
    '156982',
    '247259',
    '235386',
    '122752',
    '117899',
    '186094',
    '190765',
    '248389',
    '215076',
    '72058',
    '185997',
    '192786',
    '213291',
    '251405',
    '182958',
    '23819',
    '135327',
    '216786',
    '48725',
    '145235',
    '248129',
    '119335',
    '179941',
    '214117',
    '47162',
    '116825',
    '131447',
    '4767',
    '167614',
    '141486',
    '216974',
    '216973',
    '290090',
    '188253',
    '25653',
    '99928',
    '111400',
    '152534',
    '169602',
    '241410',
    '52992',
    '167815',
    '196403',
    '218138',
    '169810',
    '126583',
    '193377',
    '163913',
    '160763',
    '239861',
    '147648',
    '108980',
    '213271',
    '229104',
    '13574',
    '153422',
    '199002',
    '250973',
    '135582',
    '171996',
    '221171',
    '190089',
    '4498',
    '99220',
    '33034',
    '52662',
    '190420',
    '236159',
    '28584',
    '148356',
    '33244',
    '65373',
    '130258',
    '222531',
    '264028',
    '36710',
    '126861',
    '195294',
    '100934',
    '30509',
    '126394',
    '174652',
    '29332',
    '218811',
    '196477',
    '167483',
    '30072',
    '286403',
    '32778',
    '134651',
    '193084',
    '169331',
    '163074',
    '77615',
    '143950',
    '260736',
    '37146',
    '188089',
    '130016',
    '218281',
    '183328',
    '244878',
    '77519',
    '189368',
    '104987',
    '215281',
    '183236',
    '135202',
    '200469',
    '128162',
    '138632',
    '227518',
    '229444',
    '158538',
    '240661',
    '142670',
    '96971',
    '256780',
    '162815',
    '191360',
    '117222',
    '292122',
    '227166',
    '103807',
    '247009',
    '184685',
    '173504',
    '43002',
    '291372',
    '214365',
    '245873',
    '110870',
    '162697',
    '51921',
    '207127',
    '291634',
    '116661',
    '91897',
    '94593',
    '171209',
    '106185',
    '104013',
    '221296',
    '131410',
    '108846',
    '158874',
    '130264',
    '197420',
    '58929',
    '83082',
    '123731',
    '231328',
    '135886',
    '176042',
    '253873',
    '214738',
    '85903',
    '26702',
    '130035',
    '62035',
    '89277',
    '35132',
    '185101',
    '131408',
    '265906',
    '232038',
    '144180',
    '229181',
    '213921',
    '228607',
    '214281',
    '152196',
    '109232',
    '104059',
    '199056',
    '171115',
    '94307',
    '29298',
    '221287',
    '200533',
    '149157',
    '141021',
    '111779',
    '77403',
    '129166',
    '254739',
    '113791',
    '160641',
    '70547',
    '119345',
    '273835',
    '189689',
    '236385',
    '93879',
    '273231',
    '251409',
    '220484',
    '222721',
    '44204',
    '168862',
    '150621',
    '171045',
    '210591',
    '110347',
    '99070',
    '177477',
    '197139',
    '183233',
    '220644',
    '130210',
    '182309',
    '138642',
    '164962',
    '296192',
    '111490',
    '116392',
    '121970',
    '77017',
    '252534',
    '236804',
    '240579',
    '87285',
    '212227',
    '229500',
    '155731',
    '288857',
    '103927',
    '288227',
    '157146',
    '158476',
    '258780',
    '224101',
    '82524',
    '185053',
    '118046',
    '167155',
    '130041',
    '241274',
    '149592',
    '27686',
    '157597',
    '146598',
    '227194',
    '44204',
    '189626',
    '106245',
    '178121',
    '154669',
    '163973',
    '223599',
    '215492',
    '200841',
    '159619',
    '167041',
    '167032',
    '64063',
    '194839',
    '2503',
    '162480',
    '129729',
    '48193',
    '35584',
    '77143',
    '222750',
    '28816',
    '210088',
    '150378',
    '156330',
    '44204',
    '121101',
    '144169',
    '178824',
    '131877',
    '220337',
    '273458',
    '196504',
    '279788',
    '222273',
    '142034',
    '240551',
    '232305',
    '223666',
    '139416',
    '142682',
    '212140',
    '85839',
    '185152',
    '151723',
    '73046',
    '122268',
    '119202',
    '50989',
    '43022',
    '80659',
    '227889',
    '127287',
    '253437',
    '52087',
    '151563',
    '225801',
    '161018',
    '109090',
    '246658',
    '102334',
    '244391',
    '189369',
    '64237',
    '274132',
    '264526',
    '230892',
    '157896',
    '138825',
    '27230',
    '159717',
    '183398',
    '153005',
    '217237',
    '119831',
    '87461',
    '170281',
    '96799',
    '112691',
    '229168',
    '27502',
    '93059',
    '181446',
    '187848',
    '193759',
    '211408',
    '69177',
    '121950',
    '243720',
    '233857',
    '192067',
    '176024',
    '145436',
    '213293',
    '208701',
    '194076',
    '108952',
    '121235',
    '169214',
    '211622',
    '67769',
    '143778',
    '153530',
    '71559',
    '103529',
    '179881',
    '125355',
    '183442',
    '179699',
    '29690',
    '37934',
    '141234',
    '194055',
    '219427',
    '253954',
    '29690',
    '37278',
    '125511',
    '286244',
    '116098',
    '267501',
    '216599',
    '147612',
    '131323',
    '232356',
    '182846',
    '139600',
    '221235',
    '159575',
    '232972',
    '134850',
    '161820',
    '300406',
    '256275',
    '121544',
    '182841',
    '98814',
    '195525',
    '207821',
    '189821',
    '139366',
    '29302',
    '164345',
    '235088',
    '282948',
    '110367',
    '188497',
    '299843',
    '226155',
    '227076',
    '199122',
    '142965',
    '191391',
    '185343',
    '48819',
    '148478',
    '266317',
    '266007',
    '159311',
    '257838',
    '155998',
    '119058',
    '149030',
    '153408',
    '193322',
    '213560',
    '274930',
    '152980',
    '271595',
    '131151',
    '211166',
    '46148',
    '159809',
    '53554',
    '219299',
    '182416',
    '177681',
    '218526',
    '99498',
    '231764',
    '186206',
    '207507',
    '113037',
    '35430',
    '208292',
    '209634',
    '121601',
    '159145',
    '170051',
    '246458',
    '216872',
    '209289',
    '150096',
    '168456',
    '76727',
    '13118',
    '227649',
    '143507',
    '164972',
    '28578',
    '240966',
    '145935',
    '181250',
    '217300',
    '194042',
    '173354',
    '185816',
    '185922',
    '211779',
    '29330',
    '147538',
    '47456',
    '64109',
    '194372',
    '143651',
    '142254',
    '165022',
    '260491',
    '128265',
    '178594',
    '182544',
    '83716',
    '233369',
    '216918',
    '235293',
    '133111',
    '153517',
    '106883',
    '135117',
    '194246',
    '165831',
    '184193',
    '177732',
    '30427',
    '120999',
    '177942',
    '169430',
    '238840',
    '170473',
    '196739',
    '178994',
    '238556',
    '145752',
    '303937',
    '126867'
];
engine();
async function engine() {
    await waitForElm('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4');
    PageUpdateCheck();
}
async function PageUpdateCheck() {
    setInterval(function () {
        if (window['location']['pathname'] == '/back_office') {
            try {
                if (dangerlist['includes'](document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerText'])) {
                    Scanner();
                }
            } catch {
                console['log']('Not\x20on\x20danger\x20list.');
            }
        }
    }, 0x3e8);
    sendmessages();
    RadLink();
}
function Scanner() {
    if (document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20span')['innerText'] == 'Full\x20Sync:') {
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20span')['innerHTML'] = 'Do\x20Not\x20Sync,\x20Account\x20too\x20large.\x20<a\x20href=\x22https://lightspeedhq.slack.com/archives/C042STJGNP4\x22>\x20Contact\x20Analytics\x20Devs/Ambassadors\x20if\x20you\x20wish\x20to\x20Sync.\x20';
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20span')['style']['backgroundColor'] = 'yellow';
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20div')['style']['backgroundColor'] = 'yellow';
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20div\x20>\x20input[type=checkbox]')['disabled'] = !![];
        OverrideButton();
    }
}
async function OverrideButton() {
    const _0x26f565 = document['createElement']('button');
    _0x26f565['innerText'] = 'I\x20know\x20what\x20I\x27m\x20doing';
    _0x26f565['addEventListener']('click', async () => {
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20div\x20>\x20input[type=checkbox]')['disabled'] = ![];
        document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20span\x20>\x20button')['remove']();
    });
    document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20span')['append'](_0x26f565);
}
function waitForElm(_0x5f0273) {
    return new Promise(_0x38db70 => {
        if (document['querySelector'](_0x5f0273)) {
            return _0x38db70(document['querySelector'](_0x5f0273));
        }
        const _0x4117f2 = new MutationObserver(_0x19897a => {
            if (document['querySelector'](_0x5f0273)) {
                _0x38db70(document['querySelector'](_0x5f0273));
                _0x4117f2['disconnect']();
            }
        });
        _0x4117f2['observe'](document['body'], {
            'childList': !![],
            'subtree': !![]
        });
    });
}
function RadLink() {
    try {
        if (document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerHTML'] == '<h4>' + document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerText'] + '</h4>') {
            null;
        } else {
            document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerHTML'] = '<a\x20href=\x22https://radcloud.merchantos.com/?name=system.views.account&form_name=view&id=' + document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerText'] + '\x22>' + document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4')['innerText'] + '\x20';
        }
    } catch (_0x38c8f4) {
        null;
    }
}
function sendmessages() {
    console['log']('Masses');
    document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.accountSettingsBox\x20>\x20div:nth-child(9)\x20>\x20div.content-item.full-sync\x20>\x20div\x20>\x20input[type=checkbox]')['onclick'] = function () {
        var _0x424c65 = document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-right\x20>\x20div.container-card.idBox\x20>\x20div:nth-child(2)\x20>\x20div.card-stat\x20>\x20h4');
        var _0x280e37 = document['querySelector']('#o-wrapper\x20>\x20header\x20>\x20nav\x20>\x20ul.cd-user-nav\x20>\x20li\x20>\x20a')['dataset']['tipsy'];
        var _0x4c88d4 = _0x424c65['innerText'] + '\x20/\x20' + document['querySelector']('#react-root\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20section\x20>\x20div.introduction-full\x20>\x20div\x20>\x20h1')['innerText'];
        var _0x5c63aa = ![];
        if (dangerlist['includes'](_0x424c65['innerText'])) {
            _0x5c63aa = !![];
        }
        PosttoSlack(_0x4c88d4, _0x280e37, _0x5c63aa);
    };
}
async function PosttoSlack(_0x4d3d03, _0x26e2b7, _0x26e15f) {
    console['log'](_0x4d3d03);
    console['log'](_0x26e2b7);
    console['log'](_0x26e15f);
    const _0x2a5ff9 = await fetch('https://hooks.zapier.com/hooks/catch/19346638/2l4mq8z/', {
        'method': 'POST',
        'headers': {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'mode': 'no-cors',
        'body': JSON['stringify']({
            'RAD': _0x4d3d03,
            'User': _0x26e2b7,
            'Flagged_Account': _0x26e15f
        })
    });
}

async function extendDevTools(){
    console.log("fired")

    await timer (1500)
    let snowflake = document.querySelector("#Super-User-Menu > div > ul:nth-child(2) > li:nth-child(9)")

    snowflake.append(snowflake.cloneNode(true))

    document.querySelector("#Super-User-Menu > div > ul:nth-child(2) > li:nth-child(9) > li > a").href = "https://lightspeedanalytics.net/super_user/sync_jobs"



    document.querySelector("#Super-User-Menu > div > ul:nth-child(2) > li:nth-child(9) > li > a").innerHTML = `
    <i class="cl-icon">
      <svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_2" data-name="Layer 2" viewBox="165 0 484.88 413.39">
<defs>
<style>
.cls-1 {
  fill: #fff;
}

.cls-2 {
  fill: #f0efef;
}

.cls-3 {
  fill: #7d7d7d;
}

.cls-4 {
  fill: #ababab;
}

.cls-5 {
  fill: url(#linear-gradient);
}
</style>
<linearGradient id="linear-gradient" x1="288.03" y1="188.48" x2="196.85" y2="97.3" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#fff"></stop>
<stop offset="1" stop-color="#231f20"></stop>
</linearGradient>
</defs>
<g>
<path class="cls-4" d="m282.23,303.53v-135.29h-79.58v135.29h-40.59l80.38,109.86,80.38-109.86h-40.59Zm-39.79,46.23c-7.64,0-13.83-6.19-13.83-13.83s6.19-13.83,13.83-13.83,13.83,6.19,13.83,13.83-6.19,13.83-13.83,13.83Z"></path>
<g>
<path class="cls-4" d="m370.7,34.36l-114.52,72.02,42.36,67.37,114.52-72.02,21.61,34.36,50.21-126.53L349.09,0l21.61,34.36Zm60.32,9.07c4.07,6.47,2.12,15.01-4.35,19.07-6.47,4.07-15.01,2.12-19.07-4.35s-2.12-15.01,4.35-19.07,15.01-2.12,19.07,4.35Z"></path>
<path class="cls-4" d="m135.79,0L0,9.56l50.21,126.53,21.61-34.36,114.52,72.02,42.36-67.37L114.18,34.36,135.79,0Zm-62.86,39.09c6.47,4.07,8.41,12.61,4.35,19.07-4.07,6.47-12.61,8.41-19.07,4.35-6.47-4.07-8.41-12.61-4.35-19.07,4.07-6.47,12.61-8.41,19.07-4.35Z"></path>
</g>
</g>
<path class="cls-2" d="m145.98,137.3c13.73-17.56,98.85-115.97,196.02,5.29,1.14,1.43,1.2,3.45.13,4.93-12.93,17.96-95.4,121.52-196.12-5.17-1.17-1.47-1.19-3.57-.03-5.05Z"></path>
<circle class="cls-5" cx="242.44" cy="142.89" r="64.47"></circle>
<path class="cls-3" d="m240.39,71.87v19.33s0,0,0,0c32.14,0,64.27,18.33,95.61,54.52-14.57,17.44-47.75,50.51-89.75,50.51-32.06,0-64.69-19.16-97.1-56.99,15.29-16.82,49.31-48.03,91.23-48.03v-19.33m0,0c-59.83,0-103.68,51.16-113.93,64.26-1.37,1.75-1.35,4.23.03,5.97,43.86,55.17,84.79,73.44,119.78,73.44,60.08,0,102.62-53.89,112.29-67.32,1.26-1.76,1.2-4.15-.16-5.84-42.46-52.99-82.97-70.53-118-70.52h0Z"></path>
<circle cx="244.01" cy="142.89" r="19.66"></circle>
<circle class="cls-1" cx="225.91" cy="128.36" r="10.23"></circle>
</svg></svg>
    </i>
    Sync Jobs
`







}

var counter = 0

function deadpagedetection(){


    setInterval(detectblanks,1000)


}

async function detectblanks(){

    console.log("Loop")

    if(document.querySelector("#react-root").innerHTML.length === 0){
        if(counter === 1){
            console.log("Second Fail")
            location.reload()


        }
        else{counter++}



    }else{counter = 0}

}
