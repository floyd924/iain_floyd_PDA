### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    #i would use snake case, all lowercase: check_for_ace
    if card.value = 1
      #i think you need == here
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #should say def not dif
  if card1.value > card2.value
    return card.name
    #object Card does not have a 'name' attribute.
    #want card2.value?
  else
    card2
    #needs keyword 'return'.
    #this returns an object. You want to return card2.value
  end
end
end
#don't need this final end statement

def self.cards_total(cards)
  #must define array of cards
  total
  #need to define total = 0 if you wish to add to it below
  for card in cards
    total += card.value
    #must convert card.value to integar
    #must end the for loop here,
    #before you return the statement below
    return "You have a total of" + total
    #add a space after 'of' before "
  end
end

#must add 'end' term to end the class


```
