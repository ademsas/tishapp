def fav_foods
	food_array = [] 
	3.times do
		puts "Name a favotite food." 
		food_array << gets.chomp
	end
	puts "Your favorite foods are #{food_array.join(", ")}." #code here
	p food_array
	food_array.each do |food|
		puts "I like #{food} too!"
	end
end
fav_foods
