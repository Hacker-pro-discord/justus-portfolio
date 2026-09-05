from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
image = Image.new('RGB', (1200, 630), '#080c14')
d = ImageDraw.Draw(image)
font = 'C:/Windows/Fonts/segoeui.ttf'
bold = 'C:/Windows/Fonts/seguisb.ttf'
d.line((72, 65, 1128, 65), fill='#26384b', width=2)
d.text((72, 93), 'INDEPENDENT DEVELOPER', font=ImageFont.truetype(font, 20), fill='#89b1cd')
d.text((68, 148), 'Justus Dieckman.', font=ImageFont.truetype(bold, 82), fill='#eff4ff')
d.text((72, 272), 'Focused tools.', font=ImageFont.truetype(font, 54), fill='#eff4ff')
d.text((72, 336), 'Working software.', font=ImageFont.truetype(font, 54), fill='#7bdcff')
d.text((72, 505), 'Python  /  JavaScript  /  TypeScript', font=ImageFont.truetype(font, 27), fill='#aab9ce')
d.ellipse((845, 315, 1115, 585), outline='#284b6c', width=2)
d.ellipse((885, 355, 1075, 545), outline='#474d82', width=2)
d.ellipse((920, 390, 1040, 510), outline='#6cb7eb', width=2)
image.save(Path(__file__).resolve().parents[1] / 'public/og-image.png', optimize=True)
