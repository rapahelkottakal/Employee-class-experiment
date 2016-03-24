class Emp {
	constructor({ id, name, dp, dob, desig }) {
		this.id = id;
		this.name = name;
		this.dp = dp;
		this.dob = dob;
	
		this.render();
	}
	render() {

		var $wrapper = $('<div/>', { class: `emp col-xs-6 .col-md-4 ${this.id}` }),
			$img = $('<img/>', { src: this.dp, alt: this.name }),
			$id = $('<h1/>').text(this.id),
			$name = $('<h2/>', {class: 'name'}).text(this.name),
			$desig = $('<h2/>').text(this.desig),
			$dob= $('<h3/>').text(this.dob),
			$customBtn = $('<button/>', { class: 'custom-btn btn btn-default' }).text('Btn'),

			$delBtn = $('<button/>', { class: 'custom-btn btn btn-default' }).text('Btn2'),

			$overlay = $('<div/>', { class: 'overlay' });

		this.overlay = $overlay.click(()=> {
			this.openOverlay();

		});

		$customBtn.click(() => {
			this.closeOverlay();
		});
console.log($delBtn);
	$delBtn.click(() => {
			this.delDeletion();
		});

		// this.deletion = $deletion.click(()=> {
		// 	this.delDeletion();

		// });


		this.elem = $wrapper.append([$img, $id, $name, $desig, $dob, $overlay, $customBtn, $delBtn]);
	}
	openOverlay() {
		this.overlay.fadeOut();
	}
	closeOverlay() {
		this.overlay.fadeIn();
	}

	delDeletion(){
	
    this.elem.hide();

	console.log(this);
	}

	sayHi() {
		console.log(`Hello, my name is ${this.name}`);
	}



}