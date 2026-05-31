const devices = [
  {
    "name": "iPhone 16 Pro Max",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "iPhone 16 Pro",
    "general": 200,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "iPhone 16 Plus",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "iPhone 16",
    "general": 199,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 187
  },
  {
    "name": "iPhone 15 Pro Max",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "iPhone 15 Pro",
    "general": 200,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "iPhone 15 Plus",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "iPhone 15",
    "general": 199,
    "reddot": 191,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 187
  },
  {
    "name": "iPhone 14 Pro Max",
    "general": 200,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "iPhone 14 Pro",
    "general": 199,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 187
  },
  {
    "name": "iPhone 14 Plus",
    "general": 197,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "iPhone 14",
    "general": 197,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "iPhone 13 Pro Max",
    "general": 199,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 187
  },
  {
    "name": "iPhone 13 Pro",
    "general": 198,
    "reddot": 191,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "iPhone 13",
    "general": 196,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 182
  },
  {
    "name": "iPhone 12 Pro Max",
    "general": 195,
    "reddot": 185,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "iPhone 12 Pro",
    "general": 194,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "iPhone 12",
    "general": 192,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "iPhone 11 Pro Max",
    "general": 190,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "iPhone 11",
    "general": 188,
    "reddot": 178,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 100,
    "freelook": 170
  },
  {
    "name": "Galaxy S25 Ultra",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Galaxy S25+",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Galaxy S25",
    "general": 199,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "Galaxy S24 Ultra",
    "general": 200,
    "reddot": 195,
    "scope2x": 184,
    "scope4x": 166,
    "sniper": 122,
    "freelook": 191
  },
  {
    "name": "Galaxy S24+",
    "general": 199,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "Galaxy S24",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Galaxy S23 Ultra",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Galaxy S23+",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Galaxy S23",
    "general": 198,
    "reddot": 191,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 184
  },
  {
    "name": "Galaxy A56",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "Galaxy A55",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Galaxy A54",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Galaxy A35",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Galaxy A34",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Galaxy A25",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Galaxy A24",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Galaxy A15",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Galaxy A14",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Galaxy Z Fold6",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Galaxy Z Flip6",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "TECNO Spark 40",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "TECNO Spark 40 Pro",
    "general": 197,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 184
  },
  {
    "name": "TECNO Spark 30",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "TECNO Spark 30 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "TECNO Spark 20",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "TECNO Spark 20 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "TECNO Camon 40",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "TECNO Camon 40 Pro",
    "general": 199,
    "reddot": 193,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "TECNO Camon 30",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "TECNO Camon 30 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "TECNO Camon 20",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "TECNO Phantom V Fold",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "TECNO Phantom V Flip",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "TECNO Pova 7",
    "general": 200,
    "reddot": 195,
    "scope2x": 184,
    "scope4x": 166,
    "sniper": 122,
    "freelook": 191
  },
  {
    "name": "TECNO Pova 6",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "TECNO Pova 5",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Note 50",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "Note 50 Pro",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Note 40",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "Note 40 Pro",
    "general": 199,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 188
  },
  {
    "name": "Note 30",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Hot 60",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Hot 50",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Hot 50 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Hot 40",
    "general": 186,
    "reddot": 178,
    "scope2x": 162,
    "scope4x": 144,
    "sniper": 100,
    "freelook": 170
  },
  {
    "name": "Hot 30",
    "general": 184,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 168
  },
  {
    "name": "Smart 9",
    "general": 178,
    "reddot": 168,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Smart 8",
    "general": 174,
    "reddot": 164,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Zero 40",
    "general": 200,
    "reddot": 195,
    "scope2x": 184,
    "scope4x": 166,
    "sniper": 122,
    "freelook": 192
  },
  {
    "name": "Zero 30",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "Xiaomi 15 Ultra",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Xiaomi 15",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Xiaomi 14 Ultra",
    "general": 199,
    "reddot": 195,
    "scope2x": 184,
    "scope4x": 166,
    "sniper": 122,
    "freelook": 191
  },
  {
    "name": "Xiaomi 14",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Redmi Note 14 Pro+",
    "general": 198,
    "reddot": 192,
    "scope2x": 180,
    "scope4x": 162,
    "sniper": 118,
    "freelook": 188
  },
  {
    "name": "Redmi Note 14 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "Redmi Note 14",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "Redmi Note 13 Pro+",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "Redmi Note 13 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Redmi Note 13",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "POCO X7 Pro",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "POCO X7",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "POCO F7",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "POCO F6",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "POCO M7",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Reno 13",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "Reno 13 Pro",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Reno 12",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Reno 12 Pro",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "A5 Pro",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 172
  },
  {
    "name": "A3",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "A78",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Find X8",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Find X8 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "V50",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "V40",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "V30",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Y29",
    "general": 186,
    "reddot": 178,
    "scope2x": 162,
    "scope4x": 144,
    "sniper": 100,
    "freelook": 170
  },
  {
    "name": "Y28",
    "general": 184,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 168
  },
  {
    "name": "Y27",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "X200",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "X200 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Pixel 9 Pro XL",
    "general": 200,
    "reddot": 195,
    "scope2x": 184,
    "scope4x": 166,
    "sniper": 122,
    "freelook": 191
  },
  {
    "name": "Pixel 9 Pro",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Pixel 9",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Pixel 8 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Pixel 8",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Pixel 7 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Pixel 7",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "OnePlus 13",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "OnePlus 13R",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "OnePlus 12",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "OnePlus 12R",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Nord 4",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Nord CE 4",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "G42",
    "general": 184,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "G22",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "G21",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "C32",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "C22",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "XR21",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "S25 Ultra",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "S24",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "P65",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "P55",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "P40",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "A80",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A70",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Spark 10",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Spark 10 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Spark 9",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Spark 8C",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Spark Go 2024",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Spark Go 2023",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Camon 19",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Camon 19 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Camon 18",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Camon 17",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Pova Neo",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Pova Neo 2",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Pova Neo 3",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Phantom X",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Phantom X2",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Phantom X2 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Pop 8",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Pop 7",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Pop 6",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Note 12",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Note 12 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Note 11",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Note 10",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Hot 20",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Hot 20i",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Hot 12",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Hot 11",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Hot 10",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Smart 7",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Smart 6",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Smart 5",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Zero Ultra",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Zero X",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Zero 5G",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 184
  },
  {
    "name": "Zero 20",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "A73",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "A72",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "A71",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "A53",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "A52",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "A51",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "A33",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "A32",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "A23",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A22",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "A13",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "A12",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "M55",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "M54",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "M34",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "M14",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "F54",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "S22 Ultra",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "S21 Ultra",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Note 20 Ultra",
    "general": 197,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 184
  },
  {
    "name": "XS Max",
    "general": 188,
    "reddot": 178,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 100,
    "freelook": 170
  },
  {
    "name": "XS",
    "general": 186,
    "reddot": 176,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 98,
    "freelook": 168
  },
  {
    "name": "XR",
    "general": 184,
    "reddot": 174,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 96,
    "freelook": 166
  },
  {
    "name": "X",
    "general": 182,
    "reddot": 172,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 94,
    "freelook": 164
  },
  {
    "name": "8 Plus",
    "general": 178,
    "reddot": 168,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "8",
    "general": 176,
    "reddot": 166,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "7 Plus",
    "general": 174,
    "reddot": 164,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "7",
    "general": 172,
    "reddot": 162,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "SE (2022)",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "SE (2020)",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "12 Mini",
    "general": 188,
    "reddot": 178,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 100,
    "freelook": 170
  },
  {
    "name": "13 Mini",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "14 Pro",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "14 Pro Max",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "15 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "15 Pro Max",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Redmi Note 12 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Redmi Note 12",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Redmi Note 11 Pro",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Redmi Note 11",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Redmi Note 10 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Redmi Note 10",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Redmi 13C",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Redmi 12",
    "general": 186,
    "reddot": 178,
    "scope2x": 162,
    "scope4x": 144,
    "sniper": 100,
    "freelook": 172
  },
  {
    "name": "Redmi 10",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Redmi A3",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Redmi A2+",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Xiaomi 13T",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Xiaomi 13 Lite",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Xiaomi 12T Pro",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Xiaomi 12 Lite",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "POCO X6 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "POCO X6",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "POCO X5 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "POCO X5",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "POCO F5 Pro",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "POCO F5",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "POCO M6 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "POCO M5",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "POCO C65",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "POCO C55",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Reno 11",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "Reno 10",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Reno 8T",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Reno 7",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "A98",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "A78",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "A77",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "A58",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "A38",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Find N3 Flip",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "V29",
    "general": 198,
    "reddot": 190,
    "scope2x": 176,
    "scope4x": 158,
    "sniper": 114,
    "freelook": 186
  },
  {
    "name": "V27",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "V25",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Y36",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Y22",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Y21",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Y17s",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Y03",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "X100 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "X90 Pro",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "S23+",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "S23",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "S18",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "P55+",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "P38",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "P37",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A58",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "A49",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "A48",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Vision 3",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "G60",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "G50",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "G11",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "G10",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "C31",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "C21 Plus",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "C12",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "X30",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "XR20",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "8.3",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "P60 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "P50 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Nova 12",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Nova 11",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Nova Y91",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Mate 60 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Mate 50 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Y9a",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Y7a",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Y6p",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "14 Pro+",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "13 Pro+",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "12 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "11",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "C67",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "C55",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "C53",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Narzo 70",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "GT 6",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "GT Neo 5",
    "general": 199,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "iPhone 6s Plus",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 152
  },
  {
    "name": "iPhone 6s",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 150
  },
  {
    "name": "iPhone 6",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 148
  },
  {
    "name": "iPhone 5s",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 74,
    "freelook": 144
  },
  {
    "name": "Galaxy S20 Ultra",
    "general": 194,
    "reddot": 186,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 180
  },
  {
    "name": "Galaxy S20+",
    "general": 192,
    "reddot": 184,
    "scope2x": 168,
    "scope4x": 150,
    "sniper": 106,
    "freelook": 178
  },
  {
    "name": "Galaxy S10+",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Galaxy A50",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Galaxy M31",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Galaxy J7 Pro",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Spark 7 Pro",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Spark 7",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Spark 6",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Spark 5",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Spark 4",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Camon 16 Premier",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Camon 16",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Camon 15",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Camon 12",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Camon X Pro",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Phantom 9",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Phantom 8",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Pouvoir 4",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Pouvoir 3",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "F2 LTE",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Hot S3",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Hot S4",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Hot 9",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Hot 8",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Hot 7",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Note 8",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Note 7",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Note 6",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "S5 Pro",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "S5",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "S4",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Zero 8",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Zero 6",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Smart HD 2021",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Smart 4",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "S10e",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Note 10",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "A80",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "A70",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "A40",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A30",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "A20",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "A10",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "M21",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "M11",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "J8",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "J7 Pro",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Redmi Note 9 Pro",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Redmi Note 9",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Redmi Note 8 Pro",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Redmi Note 8",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Redmi Note 7",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Redmi 9A",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Redmi 9C",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Redmi 8A",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Redmi 8",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Redmi 7A",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Mi 11 Ultra",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Mi 11",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Mi 10T Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Mi 10T",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Mi A3",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Reno 6",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Reno 5",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Reno 4",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Reno 3",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "A95",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "A74",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "A54",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "A53",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "A31",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "F19",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "V23",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "V21",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "V20",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Y53s",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Y33s",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Y20",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Y15s",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Y12",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "X70 Pro",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "X60 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "G300",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "G20",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "G100",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "C30",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "C20",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "5.4",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "5.3",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "3.4",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "2.4",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "1.4",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "P40 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "P40 Lite",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "P30 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "P30 Lite",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Mate 40 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Mate 30 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Nova 9",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Nova 8i",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Y8p",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Y5p",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "10 Pro+",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "10 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "9 Pro+",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "9i",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "8 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "8i",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "C35",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "C33",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "C31",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Narzo 50",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "S24",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "S23+",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "S23",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "S18 Pro",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "S18",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "P65",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "P55 Plus",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "P55",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "P40 Plus",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "P40",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "P38 Pro",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "P38",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "P37 Pro",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "P37",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "P36",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "A80",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A70",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "A60s",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "A60",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "A58 Pro",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Spark 8 Pro",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Spark 8",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Spark 8C",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Spark 9T",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Spark 9 Pro",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Spark 10C",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Spark 10 5G",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Spark 20C",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Spark Go Plus",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Camon 11",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Camon 11 Pro",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Camon 15 Premier",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Camon 17P",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Camon 17 Pro",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Camon 18P",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Camon 18 Premier",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Camon 19 Neo",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Camon 19 Pro 5G",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Camon 20 Pro 5G",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Camon 30 Premier",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Hot 6",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Hot 6 Pro",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Hot 5",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Hot 5 Lite",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Hot 4 Pro",
    "general": 164,
    "reddot": 154,
    "scope2x": 138,
    "scope4x": 120,
    "sniper": 76,
    "freelook": 148
  },
  {
    "name": "Hot 4",
    "general": 162,
    "reddot": 152,
    "scope2x": 136,
    "scope4x": 118,
    "sniper": 74,
    "freelook": 146
  },
  {
    "name": "Hot 3 LTE",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "Hot 2",
    "general": 158,
    "reddot": 148,
    "scope2x": 132,
    "scope4x": 114,
    "sniper": 70,
    "freelook": 142
  },
  {
    "name": "Hot 10 Play",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Hot 11 Play",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Hot 12 Play",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Hot 20 Play",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Hot 30 Play",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Hot 40i",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Hot 50i",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Note 5 Stylus",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Note 5",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Note 4 Pro",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Note 3",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Note 2",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Note 12 VIP",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Note 30 VIP",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Note 40 Pro+",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "Galaxy S20 Ultra",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "S20+",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "S20",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "S10+",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "S10",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Note 10+",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Note 10",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "A50",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "A30",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A20",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "A10",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "M31",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "M21",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "M11",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "J8",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "Mi 9",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Mi 9T",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Mi 9 Lite",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Mi 10",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Mi 10 Pro",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Mi 10 Ultra",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Mi 11 Lite",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Mi 11i",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Mi Mix 3",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Mi Mix Fold",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "A17",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "A16",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "A15",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "A12",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  },
  {
    "name": "A11K",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "F17",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "F15",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "F11 Pro",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Reno Z",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Reno 2F",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Spark 3",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "Spark 2",
    "general": 158,
    "reddot": 148,
    "scope2x": 132,
    "scope4x": 114,
    "sniper": 70,
    "freelook": 142
  },
  {
    "name": "Spark Go",
    "general": 162,
    "reddot": 152,
    "scope2x": 136,
    "scope4x": 118,
    "sniper": 74,
    "freelook": 146
  },
  {
    "name": "Camon C8",
    "general": 164,
    "reddot": 154,
    "scope2x": 138,
    "scope4x": 120,
    "sniper": 76,
    "freelook": 148
  },
  {
    "name": "Camon C9",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Camon X",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Camon 12",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Pouvoir 3",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Pouvoir 2",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Spark Youth",
    "general": 162,
    "reddot": 152,
    "scope2x": 136,
    "scope4x": 118,
    "sniper": 74,
    "freelook": 146
  },
  {
    "name": "Hot 2",
    "general": 150,
    "reddot": 140,
    "scope2x": 124,
    "scope4x": 106,
    "sniper": 62,
    "freelook": 134
  },
  {
    "name": "Hot 3",
    "general": 152,
    "reddot": 142,
    "scope2x": 126,
    "scope4x": 108,
    "sniper": 64,
    "freelook": 136
  },
  {
    "name": "Hot 4",
    "general": 154,
    "reddot": 144,
    "scope2x": 128,
    "scope4x": 110,
    "sniper": 66,
    "freelook": 138
  },
  {
    "name": "Hot 5",
    "general": 156,
    "reddot": 146,
    "scope2x": 130,
    "scope4x": 112,
    "sniper": 68,
    "freelook": 140
  },
  {
    "name": "Hot 6",
    "general": 158,
    "reddot": 148,
    "scope2x": 132,
    "scope4x": 114,
    "sniper": 70,
    "freelook": 142
  },
  {
    "name": "Note 2",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "Note 3",
    "general": 162,
    "reddot": 152,
    "scope2x": 136,
    "scope4x": 118,
    "sniper": 74,
    "freelook": 146
  },
  {
    "name": "Zero 4",
    "general": 164,
    "reddot": 154,
    "scope2x": 138,
    "scope4x": 120,
    "sniper": 76,
    "freelook": 148
  },
  {
    "name": "Smart 2",
    "general": 150,
    "reddot": 140,
    "scope2x": 124,
    "scope4x": 106,
    "sniper": 62,
    "freelook": 134
  },
  {
    "name": "Smart 3",
    "general": 152,
    "reddot": 142,
    "scope2x": 126,
    "scope4x": 108,
    "sniper": 64,
    "freelook": 136
  },
  {
    "name": "Galaxy J2",
    "general": 150,
    "reddot": 140,
    "scope2x": 124,
    "scope4x": 106,
    "sniper": 62,
    "freelook": 134
  },
  {
    "name": "Galaxy J5",
    "general": 154,
    "reddot": 144,
    "scope2x": 128,
    "scope4x": 110,
    "sniper": 66,
    "freelook": 138
  },
  {
    "name": "Galaxy J7",
    "general": 156,
    "reddot": 146,
    "scope2x": 130,
    "scope4x": 112,
    "sniper": 68,
    "freelook": 140
  },
  {
    "name": "Galaxy S6",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "Galaxy S7",
    "general": 162,
    "reddot": 152,
    "scope2x": 136,
    "scope4x": 118,
    "sniper": 74,
    "freelook": 146
  },
  {
    "name": "Galaxy A01",
    "general": 164,
    "reddot": 154,
    "scope2x": 138,
    "scope4x": 120,
    "sniper": 76,
    "freelook": 148
  },
  {
    "name": "Galaxy A10",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Galaxy A20",
    "general": 168,
    "reddot": 158,
    "scope2x": 142,
    "scope4x": 124,
    "sniper": 80,
    "freelook": 152
  },
  {
    "name": "Redmi 6A",
    "general": 152,
    "reddot": 142,
    "scope2x": 126,
    "scope4x": 108,
    "sniper": 64,
    "freelook": 136
  },
  {
    "name": "Redmi 5A",
    "general": 150,
    "reddot": 140,
    "scope2x": 124,
    "scope4x": 106,
    "sniper": 62,
    "freelook": 134
  },
  {
    "name": "Redmi 4A",
    "general": 148,
    "reddot": 138,
    "scope2x": 122,
    "scope4x": 104,
    "sniper": 60,
    "freelook": 132
  },
  {
    "name": "Redmi 3S",
    "general": 146,
    "reddot": 136,
    "scope2x": 120,
    "scope4x": 102,
    "sniper": 58,
    "freelook": 130
  },
  {
    "name": "Redmi 7A",
    "general": 154,
    "reddot": 144,
    "scope2x": 128,
    "scope4x": 110,
    "sniper": 66,
    "freelook": 138
  },
  {
    "name": "Redmi 8A",
    "general": 156,
    "reddot": 146,
    "scope2x": 130,
    "scope4x": 112,
    "sniper": 68,
    "freelook": 140
  },
  {
    "name": "Redmi 9A",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "Redmi A1",
    "general": 158,
    "reddot": 148,
    "scope2x": 132,
    "scope4x": 114,
    "sniper": 70,
    "freelook": 142
  },
  {
    "name": "A1k",
    "general": 150,
    "reddot": 140,
    "scope2x": 124,
    "scope4x": 106,
    "sniper": 62,
    "freelook": 134
  },
  {
    "name": "A3s",
    "general": 152,
    "reddot": 142,
    "scope2x": 126,
    "scope4x": 108,
    "sniper": 64,
    "freelook": 136
  },
  {
    "name": "A5s",
    "general": 154,
    "reddot": 144,
    "scope2x": 128,
    "scope4x": 110,
    "sniper": 66,
    "freelook": 138
  },
  {
    "name": "A12",
    "general": 156,
    "reddot": 146,
    "scope2x": 130,
    "scope4x": 112,
    "sniper": 68,
    "freelook": 140
  },
  {
    "name": "A15",
    "general": 158,
    "reddot": 148,
    "scope2x": 132,
    "scope4x": 114,
    "sniper": 70,
    "freelook": 142
  },
  {
    "name": "F1s",
    "general": 160,
    "reddot": 150,
    "scope2x": 134,
    "scope4x": 116,
    "sniper": 72,
    "freelook": 144
  },
  {
    "name": "P60 Pro",
    "general": 200,
    "reddot": 194,
    "scope2x": 182,
    "scope4x": 164,
    "sniper": 120,
    "freelook": 190
  },
  {
    "name": "P50 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "P40 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "P30 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Mate 60 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Mate 50 Pro",
    "general": 198,
    "reddot": 192,
    "scope2x": 178,
    "scope4x": 160,
    "sniper": 116,
    "freelook": 186
  },
  {
    "name": "Mate 40 Pro",
    "general": 200,
    "reddot": 196,
    "scope2x": 186,
    "scope4x": 168,
    "sniper": 124,
    "freelook": 192
  },
  {
    "name": "Mate 30 Pro",
    "general": 196,
    "reddot": 188,
    "scope2x": 174,
    "scope4x": 156,
    "sniper": 112,
    "freelook": 182
  },
  {
    "name": "Nova 12",
    "general": 194,
    "reddot": 186,
    "scope2x": 172,
    "scope4x": 154,
    "sniper": 110,
    "freelook": 180
  },
  {
    "name": "Nova 11",
    "general": 192,
    "reddot": 184,
    "scope2x": 170,
    "scope4x": 152,
    "sniper": 108,
    "freelook": 178
  },
  {
    "name": "Nova 10",
    "general": 190,
    "reddot": 182,
    "scope2x": 166,
    "scope4x": 148,
    "sniper": 104,
    "freelook": 176
  },
  {
    "name": "Nova 9",
    "general": 188,
    "reddot": 180,
    "scope2x": 164,
    "scope4x": 146,
    "sniper": 102,
    "freelook": 174
  },
  {
    "name": "Nova 8i",
    "general": 184,
    "reddot": 174,
    "scope2x": 158,
    "scope4x": 140,
    "sniper": 96,
    "freelook": 168
  },
  {
    "name": "Nova 7i",
    "general": 182,
    "reddot": 172,
    "scope2x": 156,
    "scope4x": 138,
    "sniper": 94,
    "freelook": 166
  },
  {
    "name": "Nova 5T",
    "general": 186,
    "reddot": 176,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 98,
    "freelook": 170
  },
  {
    "name": "Y9 Prime",
    "general": 178,
    "reddot": 168,
    "scope2x": 152,
    "scope4x": 134,
    "sniper": 90,
    "freelook": 162
  },
  {
    "name": "Y7 Prime",
    "general": 174,
    "reddot": 164,
    "scope2x": 148,
    "scope4x": 130,
    "sniper": 86,
    "freelook": 158
  },
  {
    "name": "Y6 Prime",
    "general": 170,
    "reddot": 160,
    "scope2x": 144,
    "scope4x": 126,
    "sniper": 82,
    "freelook": 154
  },
  {
    "name": "Y5 2019",
    "general": 166,
    "reddot": 156,
    "scope2x": 140,
    "scope4x": 122,
    "sniper": 78,
    "freelook": 150
  },
  {
    "name": "Y8p",
    "general": 180,
    "reddot": 170,
    "scope2x": 154,
    "scope4x": 136,
    "sniper": 92,
    "freelook": 164
  },
  {
    "name": "Y7a",
    "general": 176,
    "reddot": 166,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 88,
    "freelook": 160
  },
  {
    "name": "Y6p",
    "general": 172,
    "reddot": 162,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 84,
    "freelook": 156
  }
];