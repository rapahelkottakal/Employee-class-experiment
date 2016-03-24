class Publisher extends Emp{
	constructor({ id, name, dp, dob, desig, seatNo }) {
		super({ id, name, dp, dob, desig });
		this.seatNo = seatNo;
		this.custom = null;
		this.renderCustom();
	}
	renderCustom() {
		var $overlay = this.overlay,
			$inputGroup = $('<div/>', { class: 'form-group'}).html(`
				<label for="inputEmail3" class="col-sm-2 control-label">Email</label>
				    <div class="col-sm-10">
				      <input type="email" class="custom-input form-control" placeholder="Email" val="${this.custom}">
				    </div>
				`),
			$btn = $('<button/>', { class: 'btn btn-default' }).text('Btn'),
			$input = $inputGroup.find('.custom-input');

		$input.bind('input', ()=>{
			this.custom = $input.val();
		})

		$btn.click(()=> {
			this.openOverlay();
		});

		$overlay.append([$inputGroup, $btn]);
	}
}
