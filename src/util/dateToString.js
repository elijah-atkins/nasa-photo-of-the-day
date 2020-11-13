const dateToString = (day) => {
    var y = day.getFullYear().toString();
    var m = (day.getMonth() + 1).toString();
    var d = day.getDate().toString();
    d.length === 1 && (d = "0" + d);
    m.length === 1 && (m = "0" + m);
    return `${y}-${m}-${d}`;
  };

export default dateToString;