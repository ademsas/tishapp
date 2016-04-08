class Pet
	attr_reader :color, :breed
	attr_accessor :name
	def initialize(color, breed)
		@color = color
		@breed = breed
		@hungry = true
	end
	def feed(food)
		puts "Mmmm, " + food + "!"
		@hungry = false
	end
	def hungry?
		if @hungry
			puts "I'm hungry!"
		else
			puts "I'm full!"
		end
		@hungry
	end
end
class Dog < Pet
	def speak 
		puts "Woof!"
	end
end
doggy = Dog.new("brown", "German Shephard")
puts "Let's inspect our new dog:"
puts doggy.inspect
puts "What class does our new dog belong to?"
puts doggy.class
puts "Is out new dog an object?"
puts doggy.is_a?(Object)
puts "What color is our dog?"
puts doggy.color
puts "Let's give our dog a new name"
doggy.name = "Bruno"
puts doggy.name
puts "Is our dog hungry now?"
doggy.hungry?
puts "Let's feed our dog"
doggy.feed("steak")
puts "Is our dog hungry now?"
doggy.hungry?
puts "Our dog can make noises"
doggy.speak

class Cat < Pet
	def speak
		puts "Meow!"
	end
end
kitty = Cat.new("grey", "Persian")
puts "Let's inspect our new cat:"
puts kitty.inspect
puts "What class does our new cat belong to?"
puts kitty.class
puts "Is out new cat an object?"
puts kitty.is_a?(Object)
puts "What color is our cat?"
puts kitty.color
puts "Let's give our cat a new name"
kitty.name = "Betsy"
puts kitty.name
puts "Is our cat hungry now?"
kitty.hungry?
puts "Let's feed our cat"
kitty.feed("tuna")
puts "Is our cat hungry now?"
kitty.hungry?
puts "Our cat can make noises"
kitty.speak

