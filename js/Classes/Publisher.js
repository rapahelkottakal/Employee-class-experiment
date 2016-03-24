class Publisher extends Emp{
	constructor({ id, name, dp, dob, desig, seatNo }) {
		super({ id, name, dp, dob, desig });
		this.seatNo = seatNo;

		this.reRender();
	}
	reRender() {
		console.log(this.elem);
		var $elem = this.elem,
			$name = $elem.find('.name');

		$elem.css({'background':'tomato'});
		$name.css({'font-weight': 600});
	}

}
