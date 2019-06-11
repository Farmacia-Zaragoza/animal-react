// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Node JS - Farma Scripts Tag Class  [V.0.0.1]  (2018-08-06)
// Brqx Group - Agile Farmacia Zaragoza Methodology [ES6]
//-------------------------------------------------------------------------------------
// Truck Structure Scripts - Version 01 - Js as scripts
//-------------------------------------------------------------------------------------
//[S_01]<script src="https://code.jquery.com/jquery-3.3.11.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
//    crossorigin="anonymous"></script>
//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>

//[S_01] <script type="text/javascript" src="runtime.a66f828dca56eeb90e02.js"></script>
//[S_02] <script type="text/javascript" src="polyfills.f80b7e6581d9215d226e.js"></script>
//[S_03] <script type="text/javascript" src="scripts.24cc8b20c3f290309576.js"></script>
//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>

// ------------------------------------------------------------------------------------
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--
// Class:c-scr01_js_truck-
// ------------------------------------------------------------------------------------
// Methods:
// ------------------------------------------------------------------------------------
// - build_data  	 		: Build html final code for object
// - d-create_script_0N-
// ==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--

var cons = require("/brqx/base/rcode/ea6/com/libs/general/constants.es6")

const { getset } = require(cons.JS_BASE + 'com/objects/html/getset.es6'),
	{ html_style } = require(cons.JS_BASE + 'com/objects/html/html_style.es6');


class scr02_js_scripts_animals extends getset {

	constructor(thm) {

		super()

		this.n = 'scr02_js_scripts_animals::'
		this.m = 'constructor'

		this.thm = thm

		this.script_01 = new html_style('script')

		this.script_02 = new html_style('script')

		this.build_data()

	}

	//<script src="http://animals01.vbrqx.com/dev/cassets/js/jquery.min.js"></script>

	create_jquery() {
		let js_name = 'jquery.min.js'

		// this.script_01.defer = 'defer'

		
		this.script_01.src = this.thm.u.http_domainbar + 'dev/cassets/js/' + js_name

		this.script_01.create()

		this.code += this.script_01.code
	}

	//[S_01]<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"></script>
	create_slick() {
		let js_name = 'slick.min.js'

		// this.script_01.defer = 'defer'


		this.script_01.integrity	= 	""
		this.script_01.src =
			"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js"
		// this.thm.u.http_domainbar + 'r_cassets/libs/js/slick/' + js_name

		this.script_01.pcreate()

		this.code += this.script_01.code
	}



	//[S_04] <script type="text/javascript" src="main.d05ea5aaed6e4704fb1e.js"></script>
	create_main() {
		this.script_02.async = ''

		this.script_02.defer = ''

		this.script_02.type = 'text/javascript'

		let js_name = 'main.js'

		let path_pmt = 'dev/static/js/'
		// let	path_pmt							=	''


		this.script_02.src =
			this.thm.u.http_domainbar + path_pmt + js_name

		this.script_02.pcreate()

		this.code += this.script_02.code
	}


	build_data() {
		this.create_jquery()
		// this.create_slick()

		this.create_main()

		// Ok [18-06-17]
		// this.p('js_scripts_Code : >' + this.code ) 											

	}

}

exports.scr02_js_scripts_animals = scr02_js_scripts_animals
