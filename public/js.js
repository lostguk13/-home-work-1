window.onload = function () {
  var tasks = [];

  if (localStorage.getItem('todo')) {
    tasks = JSON.parse(localStorage.getItem('todo'));
    render();
  }

  document.getElementById('add').onclick = function handleClickAdd() {
    var item = document.getElementById('in').value;
    if (item.length > 0) {
      tasks.push(item);
      render();
      localStorage.setItem('todo', JSON.stringify(tasks));
    }
    else {
      alert('пустая строка')
    }
  }

  document.getElementById('out').onclick = function handleClickRemove(event) {
    const index = event.target.parentNode.childNodes[1].id
    tasks = tasks.filter((item, idx) => idx !== Number(index))
    render();
    localStorage.setItem('todo', JSON.stringify(tasks));

  }

  function render() {
    var out = '';
    for (var i = 0; i < tasks.length; i++) {
      out += `<span>` + tasks[i] + `<button id=${i}>dddd</button> </span><br>`;
    }
    document.getElementById('out').innerHTML = out;
    document.getElementById('in').value = ''
  }
}