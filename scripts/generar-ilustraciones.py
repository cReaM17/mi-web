# Genera las ilustraciones SVG de categoría (estilo del logo: líneas finas y nodos).
# Uso: python3 scripts/generar-ilustraciones.py
import os, math
OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'assets', 'ilustraciones')
A = '#112E4E'; G = '#748797'; BG = '#F2F5F8'
W, H = 960, 640

def wrap(title, body):
    dots = (f'<defs><pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">'
            f'<circle cx="40" cy="40" r="1.6" fill="{G}" fill-opacity=".28"/><circle cx="0" cy="0" r="1.6" fill="{G}" fill-opacity=".28"/>'
            f'<circle cx="40" cy="0" r="1.6" fill="{G}" fill-opacity=".28"/><circle cx="0" cy="40" r="1.6" fill="{G}" fill-opacity=".28"/></pattern></defs>'
            f'<rect width="{W}" height="{H}" fill="url(#p)"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img">'
            f'<title>{title}</title><rect width="{W}" height="{H}" fill="{BG}"/>{dots}'
            f'<g fill="none" stroke-linecap="round" stroke-linejoin="round">{body}</g></svg>\n')

def fmt(v):
    return ('%.1f' % v).rstrip('0').rstrip('.')

def line(pts, c=A, w=4, extra=''):
    d = 'M' + ' L'.join(f'{fmt(x)},{fmt(y)}' for x, y in pts)
    return f'<path d="{d}" stroke="{c}" stroke-width="{w}"{extra}/>'
def path(d, c=A, w=4, extra=''):
    return f'<path d="{d}" stroke="{c}" stroke-width="{w}"{extra}/>'
def node(x, y, c=G, r=11):
    return f'<circle cx="{x}" cy="{y}" r="{r}" stroke="{c}" stroke-width="5" fill="{BG}"/>'
def rect(x, y, w, h, c=G, sw=3, rx=14, fill='none'):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" stroke="{c}" stroke-width="{sw}" fill="{fill}"/>'
def circ(x, y, r, c=A, w=4, fill='none'):
    return f'<circle cx="{x}" cy="{y}" r="{r}" stroke="{c}" stroke-width="{w}" fill="{fill}"/>'

# 1. Baja tensión: cuadro con embarrado y circuitos
b = rect(200, 110, 560, 400)
b += line([(480, 40), (480, 190)], A, 5) + node(480, 40, A)
b += line([(260, 190), (700, 190)], A, 7)
for x in (280, 380, 480, 580, 680):
    b += line([(x, 190), (x, 290)])
    b += line([(x - 10, 280), (x + 10, 300)], A, 3) + line([(x - 10, 300), (x + 10, 280)], A, 3)
    b += line([(x, 300), (x + 26, 346)])
    b += line([(x, 352), (x, 450)])
    b += node(x, 462)
b += line([(280, 474), (280, 570), (110, 570)], G, 3) + node(98, 570)
b += line([(680, 474), (680, 570), (850, 570)], G, 3) + node(862, 570)
# toma de tierra
b += line([(480, 474), (480, 560)], G, 3) + line([(450, 560), (510, 560)], G, 3) + line([(462, 576), (498, 576)], G, 3) + line([(472, 592), (488, 592)], G, 3)

# 2. Media tensión: apoyo de celosía, conductores y centro de transformación
m = line([(300, 580), (355, 150), (385, 150), (440, 580)], A, 4)
for i in range(6):
    y1 = 560 - i * 70; y2 = y1 - 70
    xl1 = 300 + (580 - y1) * 55 / 430; xr1 = 440 - (580 - y1) * 55 / 430
    xl2 = 300 + (580 - y2) * 55 / 430; xr2 = 440 - (580 - y2) * 55 / 430
    if y2 >= 150:
        m += line([(xl1, y1), (xr2, y2)], A, 2) + line([(xr1, y1), (xl2, y2)], A, 2)
m += line([(370, 150), (370, 100)], A, 4)
m += line([(230, 200), (510, 200)], A, 4) + line([(260, 290), (480, 290)], A, 4)
for x, y in ((230, 200), (510, 200), (260, 290), (480, 290)):
    m += line([(x, y), (x, y + 34)], G, 3) + node(x, y + 44, G, 8)
m += path('M510,244 Q690,330 930,260', G, 3) + path('M480,334 Q680,420 930,340', G, 3)
m += path('M230,244 Q130,300 30,262', G, 3) + path('M260,334 Q150,400 30,350', G, 3)
m += rect(640, 430, 220, 150, A, 4, 10)
m += circ(728, 505, 34, A, 4) + circ(772, 505, 34, A, 4)
m += line([(440, 600), (750, 600), (750, 580)], G, 3, ' stroke-dasharray="10 10"') + node(440, 600, G, 8)
m += line([(860, 505), (920, 505)], A, 3) + node(930, 505, A, 8)

# 3. ICT: edificio con antenas y red interior
t = rect(330, 210, 300, 380, A, 4, 6)
for y in (286, 362, 438, 514):
    t += line([(330, y), (630, y)], G, 2)
t += line([(420, 210), (420, 70)], A, 4)
for y, wd in ((84, 44), (110, 56), (136, 68)):
    t += line([(420 - wd / 2, y), (420 + wd / 2, y)], A, 3)
t += path('M520,168 Q560,96 612,150', A, 4) + line([(520, 168), (612, 150)], A, 3)
t += line([(566, 159), (556, 120)], A, 3) + line([(566, 159), (566, 210)], A, 4)
t += path('M640,100 Q662,120 650,146', G, 3) + path('M664,82 Q698,118 678,160', G, 3)
t += line([(480, 210), (480, 580)], G, 4)
for y in (248, 324, 400, 476, 552):
    t += line([(380, y), (580, y)], G, 2) + node(380, y, A, 8) + node(580, y, A, 8) + node(480, y, G, 6)
t += line([(480, 590), (480, 612), (100, 612)], A, 3) + node(88, 612, A, 9)
t += line([(630, 612), (860, 612)], G, 3) + node(872, 612, G, 9)

# 4. Fotovoltaica: sol, paneles e inversor
f = circ(200, 150, 48, A, 4)
for k in range(8):
    a = k * math.pi / 4
    f += line([(200 + 68 * math.cos(a), 150 + 68 * math.sin(a)), (200 + 92 * math.cos(a), 150 + 92 * math.sin(a))], G, 3)
def panel(x0, y0):
    p = line([(x0, y0 + 160), (x0 + 240, y0 + 160), (x0 + 300, y0), (x0 + 60, y0), (x0, y0 + 160)], A, 4)
    for i in (1, 2):
        p += line([(x0 + 80 * i, y0 + 160), (x0 + 60 + 80 * i, y0)], A, 2)
    p += line([(x0 + 22.5, y0 + 100), (x0 + 262.5, y0 + 100)], A, 2) + line([(x0 + 37.5, y0 + 60), (x0 + 277.5, y0 + 60)], A, 2)
    p += line([(x0 + 70, y0 + 160), (x0 + 70, y0 + 230)], G, 3) + line([(x0 + 210, y0 + 160), (x0 + 210, y0 + 230)], G, 3)
    return p
f += panel(100, 320) + panel(410, 260)
f += line([(170, 550), (690, 550)], G, 3)
f += line([(680, 400), (810, 400), (810, 290)], G, 3) + node(680, 400, G, 8)
f += rect(740, 190, 140, 100, A, 4, 10)
f += path('M762,252 Q782,212 802,240 T842,228 T862,222', A, 3)
f += line([(880, 240), (920, 240)], A, 3) + node(930, 240, A)
f += line([(850, 290), (850, 480), (918, 480)], G, 3) + node(930, 480, G)

# 5. Licencias: documento, sello y plano
l = path('M300,110 L520,110 L580,170 L580,520 L300,520 Z', A, 4) + path('M520,110 L520,170 L580,170', A, 3)
for i, wd in enumerate((200, 230, 180, 230, 210, 140)):
    l += line([(330, 210 + i * 40), (330 + wd, 210 + i * 40)], G, 3)
l += circ(560, 470, 62, A, 4) + circ(560, 470, 48, G, 2)
l += line([(534, 470), (552, 490), (588, 450)], A, 5)
l += rect(680, 200, 200, 240, A, 4, 4)
l += line([(680, 320), (770, 320)], A, 3) + line([(800, 320), (880, 320)], A, 3)
l += line([(780, 200), (780, 280)], A, 3)
l += path('M770,320 A30,30 0 0 1 800,350', G, 2) + line([(800, 320), (800, 350)], G, 2)
l += line([(580, 260), (680, 260)], G, 3, ' stroke-dasharray="8 10"')
l += line([(780, 440), (780, 560), (180, 560)], G, 3) + node(168, 560)
l += line([(300, 150), (180, 150)], G, 3) + node(168, 150)

# 6. Eficiencia energética: escala por letras y vivienda
e = ''
for i in range(7):
    y = 120 + i * 62; ln = 150 + i * 42
    col = A if i < 2 else G
    e += path(f'M150,{y} L{150 + ln},{y} L{150 + ln + 24},{y + 22} L{150 + ln},{y + 44} L150,{y + 44} Z', col, 3)
e += circ(130, 142, 8, A, 3, A)
e += line([(520, 142), (600, 142)], A, 3, ' stroke-dasharray="6 8"')
e += path('M610,330 L740,210 L870,330', A, 4) + line([(635, 310), (635, 530), (845, 530), (845, 310)], A, 4)
e += path('M680,470 A60,60 0 0 1 800,470', G, 4)
e += line([(740, 470), (705, 432)], A, 4) + node(740, 470, A, 8)
e += line([(612, 142), (740, 142), (740, 210)], G, 3) + node(612, 142, A, 9)
e += line([(845, 430), (910, 430)], G, 3) + node(920, 430)

data = {
    'baja-tension': ('Baja tensión', b), 'media-tension': ('Media tensión', m), 'ict': ('ICT', t),
    'fotovoltaica': ('Fotovoltaica', f), 'licencias': ('Licencias', l), 'eficiencia-energetica': ('Eficiencia energética', e),
}
for k, (title, body) in data.items():
    open(os.path.join(OUT, k + '.svg'), 'w').write(wrap(title, body))
print('ok')
