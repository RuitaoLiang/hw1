right();
if (getColor() == "blue"){
  down();
  down();
  down();
  left();
  down();
} else if (getColor() == "red"){
  up();
  up();
  up();
  if (getColor() == "blue"){
  right();
  up();
  } else if (getColor() == "red"){
  left(); 
  up();
  }
}
