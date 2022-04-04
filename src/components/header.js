class Header {
    render(){
    const header = document.createElement('h1');
    header.innerHTML = 'Hello world';

    const body = document.body;
    body.appendChild(header)
    }
}

const header = new Header

export default header