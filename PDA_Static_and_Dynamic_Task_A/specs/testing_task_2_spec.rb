require("minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class TestCardGame < MiniTest::Test


  def setup()
    @game1 = CardGame.new
    @card1 = Card.new("hearts", 7)
    @card2 = Card.new("spades", 1)
    @card3 = Card.new("spades", 9)
    @cards = [@card1, @card2, @card3]
  end

  def test_checkforAce_true()
    assert_equal(true, @game1.checkforAce(@card2))
  end

  def test_checkforAce_false()
    assert_equal(false, @game1.checkforAce(@card1))
  end

  def test_highest_card_card1()
    assert_equal(7, @game1.highest_card(@card1, @card2))
  end

  def test_highest_card_card2()
    assert_equal(9, @game1.highest_card(@card1, @card3))
  end

  def test_cards_total()
    assert_equal("You have a total of 17", CardGame.cards_total(@cards))
  end

end
