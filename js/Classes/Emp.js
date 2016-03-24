class Emp {
	constructor({ id, name, dp, dob, desig }) {
		this.id = id;
		this.name = name;
		this.dp = dp;
		this.dob = dob;
	
		this.render();
	}
	render() {

		var $wrapper = $('<div/>', { class: `emp ${this.id}` }),
			$img = $('<img/>', { src: this.dp, alt: this.name }),
			$id = $('<h1/>').text(this.id),
			$name = $('<h2/>', {class: 'name'}).text(this.name),
			$desig = $('<h2/>').text(this.desig),
			$dob= $('<h3/>').text(this.dob);

		this.elem = $wrapper.append([$img, $id, $name, $desig, $dob]);
	}
	sayHi() {
		console.log(`Hello, my name is ${this.name}`);
	}
}