menu = {
 "Burger" => 5.60,
 "Fish and chips" => 6.40,
 "Sausages and mash" => 4.96
}


menu.each do |food, price|
 puts "#{food} is £#{price}"
end
