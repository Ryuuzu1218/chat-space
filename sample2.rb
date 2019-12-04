class Pockemon

  @nakigoe=gets
  @gensen=gets.to_i
  end
  
  class Pikachu <Pockemon
  
  def status
  puts"鳴き声は#{@nakigoe}です。攻撃力は#{@gensen}です。"
  end
  def initialize
  status
  end

  end
  
  pikachu=Pikachu.new
  
  