const products = [
  {
    image:
      "https://imgs.search.brave.com/fJUBdmD12VwcV9BIhl27Z4BW4EWU73DkY8Gl67PSWDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi96/VV92THhWSmhDUHdS/d3Y1U0hGelIyTi03/eGs9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9zcG9vbi1vZi1j/aGlsaS1wb3dkZXIt/MTE1ODg2ODIyNi1h/YjhhYTcxZmI3YWM0/MDA1YWQ2OGUzNzkx/ZjBhYTQxMi5qcGc",
    name: "image1",
  },
  {
    image:
      "https://imgs.search.brave.com/Cx5qD_kjKkq5dPfB9NRokaLVHwC1FSOWu9k6dw0qkIc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/amtjYXJ0LmNvbS91/cGxvYWRzL2Jsb2dz/L2Jsb2dJbWdfMjIy/NjY0Mzg3NDMxODc0/OTkyNzg3NDU1NjM5/NTE1LmpwZw",
    name: "image2",
  },
  {
    image:
      "https://imgs.search.brave.com/awj8_4fFFmZ3Mo56ua51eqbmcCJRRzaiFQwEQXtvtjw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MDMvNDQxMy8yNzkx/L2ZpbGVzL1JlZF9Q/YXByaWthX2FuZF9S/ZWRfQ2hpbGlfUG93/ZGVyLmpwZz92PTE2/MTY5MDU5MzI",
    name: "image3",
  },
  {
    image:"https://imgs.search.brave.com/cRJAycFsv0R9B3jGkoScZl805s6VUaqpLvFzpG43tIk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFyaWdob3RyYS5j/by51ay9pbWFnZXMv/U2h1dHRlcnN0b2Nr/L3JlZGNoaWxsaXBv/d2Rlcl81NjB4NTYw/LmpwZw",
    name: "image4",
  },
];

function DifferentVarity() {
  return (
    <div className="container">
      {products.map((data) => {
        const { image, name } = data;
        return (
          <div key={name}>
            <img src={image} alt={name} className="products"/>
          </div>
        );
      })}
    </div>
  );
}

export default DifferentVarity
