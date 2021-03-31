import random

print('契約書だよ。そこに名前を書きな。')
name = input('> ')
print(f'フン。{name}というのかい。贅沢な名だねぇ。')

newname = random.choice(name)

print(f'今からお前の名前は{newname}だ。いいかい、{newname}だよ。分かったら返事をするんだ、{newname}!!')
