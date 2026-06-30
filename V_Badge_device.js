const devices = [
  {
    "name": "iPhone 16 Pro Max",
    "general": 116,
    "reddot": 63,
    "scope2x": 70,
    "scope4x": 90,
    "sniper": 62,
    "freelook": 113
  },
  {
    "name": "iPhone 16 Pro",
    "general": 86,
    "reddot": 99,
    "scope2x": 106,
    "scope4x": 145,
    "sniper": 79,
    "freelook": 100
  },
  {
    "name": "iPhone 16 Plus",
    "general": 103,
    "reddot": 95,
    "scope2x": 136,
    "scope4x": 109,
    "sniper": 146,
    "freelook": 145
  },
  {
    "name": "iPhone 16",
    "general": 99,
    "reddot": 96,
    "scope2x": 92,
    "scope4x": 123,
    "sniper": 130,
    "freelook": 72
  },
  {
    "name": "iPhone 15 Pro Max",
    "general": 64,
    "reddot": 67,
    "scope2x": 63,
    "scope4x": 93,
    "sniper": 129,
    "freelook": 70
  },
  {
    "name": "iPhone 15 Pro",
    "general": 139,
    "reddot": 102,
    "scope2x": 114,
    "scope4x": 82,
    "sniper": 115,
    "freelook": 132
  },
  {
    "name": "iPhone 15 Plus",
    "general": 73,
    "reddot": 62,
    "scope2x": 127,
    "scope4x": 106,
    "sniper": 82,
    "freelook": 69
  },
  {
    "name": "iPhone 15",
    "general": 129,
    "reddot": 88,
    "scope2x": 119,
    "scope4x": 123,
    "sniper": 97,
    "freelook": 147
  },
  {
    "name": "iPhone 14 Pro Max",
    "general": 87,
    "reddot": 94,
    "scope2x": 149,
    "scope4x": 114,
    "sniper": 118,
    "freelook": 132
  },
  {
    "name": "iPhone 14 Pro",
    "general": 128,
    "reddot": 122,
    "scope2x": 102,
    "scope4x": 115,
    "sniper": 146,
    "freelook": 129
  },
  {
    "name": "iPhone 14 Plus",
    "general": 68,
    "reddot": 80,
    "scope2x": 60,
    "scope4x": 108,
    "sniper": 103,
    "freelook": 89
  },
  {
    "name": "iPhone 14",
    "general": 71,
    "reddot": 92,
    "scope2x": 127,
    "scope4x": 143,
    "sniper": 49,
    "freelook": 133
  },
  {
    "name": "iPhone 13 Pro Max",
    "general": 72,
    "reddot": 79,
    "scope2x": 72,
    "scope4x": 119,
    "sniper": 101,
    "freelook": 89
  },
  {
    "name": "iPhone 13 Pro",
    "general": 78,
    "reddot": 149,
    "scope2x": 117,
    "scope4x": 122,
    "sniper": 46,
    "freelook": 124
  },
  {
    "name": "iPhone 13",
    "general": 81,
    "reddot": 63,
    "scope2x": 109,
    "scope4x": 88,
    "sniper": 141,
    "freelook": 105
  },
  {
    "name": "iPhone 12 Pro Max",
    "general": 104,
    "reddot": 68,
    "scope2x": 104,
    "scope4x": 74,
    "sniper": 79,
    "freelook": 70
  },
  {
    "name": "iPhone 12 Pro",
    "general": 100,
    "reddot": 131,
    "scope2x": 89,
    "scope4x": 118,
    "sniper": 139,
    "freelook": 150
  },
  {
    "name": "iPhone 12",
    "general": 72,
    "reddot": 150,
    "scope2x": 136,
    "scope4x": 80,
    "sniper": 116,
    "freelook": 63
  },
  {
    "name": "iPhone 11 Pro Max",
    "general": 144,
    "reddot": 149,
    "scope2x": 79,
    "scope4x": 66,
    "sniper": 63,
    "freelook": 83
  },
  {
    "name": "iPhone 11",
    "general": 82,
    "reddot": 95,
    "scope2x": 81,
    "scope4x": 103,
    "sniper": 126,
    "freelook": 60
  },
  {
    "name": "Samsung Galaxy S25 Ultra",
    "general": 80,
    "reddot": 124,
    "scope2x": 110,
    "scope4x": 103,
    "sniper": 117,
    "freelook": 117
  },
  {
    "name": "Samsung Galaxy S25+",
    "general": 134,
    "reddot": 91,
    "scope2x": 158,
    "scope4x": 108,
    "sniper": 120,
    "freelook": 105
  },
  {
    "name": "Samsung Galaxy S25",
    "general": 107,
    "reddot": 120,
    "scope2x": 115,
    "scope4x": 121,
    "sniper": 92,
    "freelook": 82
  },
  {
    "name": "Samsung Galaxy S24 Ultra",
    "general": 116,
    "reddot": 108,
    "scope2x": 123,
    "scope4x": 124,
    "sniper": 147,
    "freelook": 92
  },
  {
    "name": "Samsung Galaxy S24+",
    "general": 96,
    "reddot": 94,
    "scope2x": 155,
    "scope4x": 130,
    "sniper": 119,
    "freelook": 146
  },
  {
    "name": "Samsung Galaxy S24",
    "general": 98,
    "reddot": 114,
    "scope2x": 130,
    "scope4x": 105,
    "sniper": 158,
    "freelook": 105
  },
  {
    "name": "Samsung Galaxy S23 Ultra",
    "general": 108,
    "reddot": 92,
    "scope2x": 89,
    "scope4x": 130,
    "sniper": 124,
    "freelook": 101
  },
  {
    "name": "Samsung Galaxy S23+",
    "general": 133,
    "reddot": 146,
    "scope2x": 134,
    "scope4x": 139,
    "sniper": 113,
    "freelook": 81
  },
  {
    "name": "Samsung Galaxy S23",
    "general": 143,
    "reddot": 103,
    "scope2x": 147,
    "scope4x": 88,
    "sniper": 136,
    "freelook": 129
  },
  {
    "name": "Samsung Galaxy A56",
    "general": 144,
    "reddot": 95,
    "scope2x": 151,
    "scope4x": 88,
    "sniper": 124,
    "freelook": 149
  },
  {
    "name": "Samsung Galaxy A55",
    "general": 146,
    "reddot": 150,
    "scope2x": 90,
    "scope4x": 157,
    "sniper": 80,
    "freelook": 112
  },
  {
    "name": "Samsung Galaxy A54",
    "general": 143,
    "reddot": 137,
    "scope2x": 154,
    "scope4x": 99,
    "sniper": 107,
    "freelook": 138
  },
  {
    "name": "Samsung Galaxy A35",
    "general": 143,
    "reddot": 117,
    "scope2x": 80,
    "scope4x": 81,
    "sniper": 156,
    "freelook": 114
  },
  {
    "name": "Samsung Galaxy A34",
    "general": 92,
    "reddot": 158,
    "scope2x": 109,
    "scope4x": 91,
    "sniper": 112,
    "freelook": 138
  },
  {
    "name": "Samsung Galaxy A25",
    "general": 149,
    "reddot": 141,
    "scope2x": 85,
    "scope4x": 105,
    "sniper": 106,
    "freelook": 137
  },
  {
    "name": "Samsung Galaxy A24",
    "general": 92,
    "reddot": 150,
    "scope2x": 144,
    "scope4x": 116,
    "sniper": 117,
    "freelook": 119
  },
  {
    "name": "Samsung Galaxy A15",
    "general": 111,
    "reddot": 149,
    "scope2x": 145,
    "scope4x": 136,
    "sniper": 146,
    "freelook": 150
  },
  {
    "name": "Samsung Galaxy A14",
    "general": 157,
    "reddot": 121,
    "scope2x": 127,
    "scope4x": 124,
    "sniper": 82,
    "freelook": 84
  },
  {
    "name": "Samsung Galaxy Z Fold6",
    "general": 131,
    "reddot": 153,
    "scope2x": 96,
    "scope4x": 117,
    "sniper": 88,
    "freelook": 98
  },
  {
    "name": "Samsung Galaxy Z Flip6",
    "general": 146,
    "reddot": 135,
    "scope2x": 155,
    "scope4x": 137,
    "sniper": 134,
    "freelook": 90
  },
  {
    "name": "TECNO Spark 40",
    "general": 120,
    "reddot": 97,
    "scope2x": 122,
    "scope4x": 115,
    "sniper": 118,
    "freelook": 146
  },
  {
    "name": "TECNO Spark 40 Pro",
    "general": 111,
    "reddot": 98,
    "scope2x": 127,
    "scope4x": 149,
    "sniper": 133,
    "freelook": 145
  },
  {
    "name": "TECNO Spark 30",
    "general": 94,
    "reddot": 89,
    "scope2x": 153,
    "scope4x": 114,
    "sniper": 98,
    "freelook": 122
  },
  {
    "name": "TECNO Spark 30 Pro",
    "general": 89,
    "reddot": 132,
    "scope2x": 147,
    "scope4x": 134,
    "sniper": 141,
    "freelook": 140
  },
  {
    "name": "TECNO Spark 20",
    "general": 141,
    "reddot": 107,
    "scope2x": 129,
    "scope4x": 94,
    "sniper": 141,
    "freelook": 94
  },
  {
    "name": "TECNO Spark 20 Pro",
    "general": 80,
    "reddot": 135,
    "scope2x": 159,
    "scope4x": 143,
    "sniper": 143,
    "freelook": 118
  },
  {
    "name": "TECNO Camon 40",
    "general": 112,
    "reddot": 124,
    "scope2x": 117,
    "scope4x": 132,
    "sniper": 129,
    "freelook": 134
  },
  {
    "name": "TECNO Camon 40 Pro",
    "general": 99,
    "reddot": 138,
    "scope2x": 114,
    "scope4x": 84,
    "sniper": 145,
    "freelook": 93
  },
  {
    "name": "TECNO Camon 30",
    "general": 127,
    "reddot": 85,
    "scope2x": 86,
    "scope4x": 83,
    "sniper": 128,
    "freelook": 141
  },
  {
    "name": "TECNO Camon 30 Pro",
    "general": 89,
    "reddot": 82,
    "scope2x": 121,
    "scope4x": 160,
    "sniper": 130,
    "freelook": 89
  },
  {
    "name": "TECNO Camon 20",
    "general": 85,
    "reddot": 151,
    "scope2x": 112,
    "scope4x": 118,
    "sniper": 121,
    "freelook": 111
  },
  {
    "name": "TECNO Phantom V Fold",
    "general": 107,
    "reddot": 119,
    "scope2x": 98,
    "scope4x": 96,
    "sniper": 154,
    "freelook": 125
  },
  {
    "name": "TECNO Phantom V Flip",
    "general": 130,
    "reddot": 137,
    "scope2x": 113,
    "scope4x": 95,
    "sniper": 145,
    "freelook": 130
  },
  {
    "name": "TECNO Pova 7",
    "general": 123,
    "reddot": 149,
    "scope2x": 147,
    "scope4x": 157,
    "sniper": 123,
    "freelook": 158
  },
  {
    "name": "TECNO Pova 6",
    "general": 125,
    "reddot": 80,
    "scope2x": 103,
    "scope4x": 115,
    "sniper": 111,
    "freelook": 80
  },
  {
    "name": "TECNO Pova 5",
    "general": 151,
    "reddot": 133,
    "scope2x": 103,
    "scope4x": 144,
    "sniper": 113,
    "freelook": 116
  },
  {
    "name": "Infinix Note 50",
    "general": 136,
    "reddot": 125,
    "scope2x": 136,
    "scope4x": 150,
    "sniper": 153,
    "freelook": 82
  },
  {
    "name": "Infinix Note 50 Pro",
    "general": 110,
    "reddot": 156,
    "scope2x": 94,
    "scope4x": 95,
    "sniper": 115,
    "freelook": 110
  },
  {
    "name": "Infinix Note 40",
    "general": 123,
    "reddot": 153,
    "scope2x": 146,
    "scope4x": 86,
    "sniper": 81,
    "freelook": 156
  },
  {
    "name": "Infinix Note 40 Pro",
    "general": 81,
    "reddot": 109,
    "scope2x": 83,
    "scope4x": 113,
    "sniper": 105,
    "freelook": 157
  },
  {
    "name": "Infinix Note 30",
    "general": 123,
    "reddot": 99,
    "scope2x": 97,
    "scope4x": 89,
    "sniper": 91,
    "freelook": 148
  },
  {
    "name": "Infinix Hot 131",
    "general": 100,
    "reddot": 82,
    "scope2x": 92,
    "scope4x": 135,
    "sniper": 154,
    "freelook": 92
  },
  {
    "name": "Infinix Hot 50",
    "general": 116,
    "reddot": 135,
    "scope2x": 102,
    "scope4x": 117,
    "sniper": 124,
    "freelook": 135
  },
  {
    "name": "Infinix Hot 50 Pro",
    "general": 103,
    "reddot": 88,
    "scope2x": 153,
    "scope4x": 143,
    "sniper": 109,
    "freelook": 110
  },
  {
    "name": "Infinix Hot 40",
    "general": 142,
    "reddot": 157,
    "scope2x": 146,
    "scope4x": 97,
    "sniper": 143,
    "freelook": 88
  },
  {
    "name": "Infinix Hot 30",
    "general": 119,
    "reddot": 155,
    "scope2x": 149,
    "scope4x": 90,
    "sniper": 112,
    "freelook": 138
  },
  {
    "name": "Infinix Smart 9",
    "general": 159,
    "reddot": 114,
    "scope2x": 81,
    "scope4x": 137,
    "sniper": 146,
    "freelook": 133
  },
  {
    "name": "Infinix Smart 8",
    "general": 91,
    "reddot": 151,
    "scope2x": 104,
    "scope4x": 96,
    "sniper": 160,
    "freelook": 99
  },
  {
    "name": "Infinix Zero 40",
    "general": 128,
    "reddot": 111,
    "scope2x": 89,
    "scope4x": 84,
    "sniper": 127,
    "freelook": 159
  },
  {
    "name": "Infinix Zero 30",
    "general": 80,
    "reddot": 107,
    "scope2x": 84,
    "scope4x": 99,
    "sniper": 91,
    "freelook": 114
  },
  {
    "name": "Xiaomi 15 Ultra",
    "general": 115,
    "reddot": 117,
    "scope2x": 120,
    "scope4x": 84,
    "sniper": 145,
    "freelook": 124
  },
  {
    "name": "Xiaomi 15",
    "general": 134,
    "reddot": 128,
    "scope2x": 106,
    "scope4x": 85,
    "sniper": 143,
    "freelook": 84
  },
  {
    "name": "Xiaomi 14 Ultra",
    "general": 134,
    "reddot": 114,
    "scope2x": 106,
    "scope4x": 101,
    "sniper": 130,
    "freelook": 160
  },
  {
    "name": "Xiaomi 14",
    "general": 123,
    "reddot": 123,
    "scope2x": 89,
    "scope4x": 134,
    "sniper": 93,
    "freelook": 106
  },
  {
    "name": "Redmi Note 14 Pro+",
    "general": 133,
    "reddot": 136,
    "scope2x": 103,
    "scope4x": 134,
    "sniper": 92,
    "freelook": 143
  },
  {
    "name": "Redmi Note 14 Pro",
    "general": 139,
    "reddot": 156,
    "scope2x": 118,
    "scope4x": 138,
    "sniper": 141,
    "freelook": 157
  },
  {
    "name": "Redmi Note 14",
    "general": 93,
    "reddot": 150,
    "scope2x": 158,
    "scope4x": 115,
    "sniper": 151,
    "freelook": 114
  },
  {
    "name": "Redmi Note 13 Pro+",
    "general": 147,
    "reddot": 106,
    "scope2x": 124,
    "scope4x": 129,
    "sniper": 88,
    "freelook": 89
  },
  {
    "name": "Redmi Note 13 Pro",
    "general": 92,
    "reddot": 135,
    "scope2x": 142,
    "scope4x": 140,
    "sniper": 84,
    "freelook": 109
  },
  {
    "name": "Redmi Note 13",
    "general": 117,
    "reddot": 101,
    "scope2x": 128,
    "scope4x": 133,
    "sniper": 121,
    "freelook": 160
  },
  {
    "name": "POCO X7 Pro",
    "general": 110,
    "reddot": 153,
    "scope2x": 136,
    "scope4x": 106,
    "sniper": 134,
    "freelook": 118
  },
  {
    "name": "POCO X7",
    "general": 87,
    "reddot": 128,
    "scope2x": 104,
    "scope4x": 98,
    "sniper": 100,
    "freelook": 153
  },
  {
    "name": "POCO F7",
    "general": 149,
    "reddot": 112,
    "scope2x": 142,
    "scope4x": 136,
    "sniper": 105,
    "freelook": 158
  },
  {
    "name": "POCO F6",
    "general": 132,
    "reddot": 100,
    "scope2x": 96,
    "scope4x": 126,
    "sniper": 99,
    "freelook": 159
  },
  {
    "name": "POCO M7",
    "general": 115,
    "reddot": 122,
    "scope2x": 143,
    "scope4x": 98,
    "sniper": 141,
    "freelook": 128
  },
  {
    "name": "OPPO Reno 13",
    "general": 149,
    "reddot": 160,
    "scope2x": 103,
    "scope4x": 115,
    "sniper": 151,
    "freelook": 155
  },
  {
    "name": "OPPO Reno 13 Pro",
    "general": 88,
    "reddot": 96,
    "scope2x": 137,
    "scope4x": 83,
    "sniper": 123,
    "freelook": 95
  },
  {
    "name": "OPPO Reno 12",
    "general": 124,
    "reddot": 80,
    "scope2x": 103,
    "scope4x": 130,
    "sniper": 160,
    "freelook": 115
  },
  {
    "name": "OPPO Reno 12 Pro",
    "general": 83,
    "reddot": 117,
    "scope2x": 152,
    "scope4x": 151,
    "sniper": 95,
    "freelook": 102
  },
  {
    "name": "OPPO A5 Pro",
    "general": 106,
    "reddot": 148,
    "scope2x": 83,
    "scope4x": 82,
    "sniper": 122,
    "freelook": 89
  },
  {
    "name": "OPPO A3",
    "general": 159,
    "reddot": 84,
    "scope2x": 83,
    "scope4x": 117,
    "sniper": 86,
    "freelook": 104
  },
  {
    "name": "OPPO A78",
    "general": 81,
    "reddot": 109,
    "scope2x": 97,
    "scope4x": 83,
    "sniper": 83,
    "freelook": 159
  },
  {
    "name": "OPPO Find X8",
    "general": 103,
    "reddot": 133,
    "scope2x": 83,
    "scope4x": 145,
    "sniper": 85,
    "freelook": 124
  },
  {
    "name": "OPPO Find X8 Pro",
    "general": 142,
    "reddot": 80,
    "scope2x": 88,
    "scope4x": 129,
    "sniper": 96,
    "freelook": 154
  },
  {
    "name": "vivo V50",
    "general": 127,
    "reddot": 94,
    "scope2x": 96,
    "scope4x": 148,
    "sniper": 119,
    "freelook": 105
  },
  {
    "name": "vivo V40",
    "general": 129,
    "reddot": 119,
    "scope2x": 104,
    "scope4x": 152,
    "sniper": 133,
    "freelook": 132
  },
  {
    "name": "vivo V30",
    "general": 140,
    "reddot": 91,
    "scope2x": 155,
    "scope4x": 101,
    "sniper": 148,
    "freelook": 99
  },
  {
    "name": "vivo Y29",
    "general": 107,
    "reddot": 117,
    "scope2x": 96,
    "scope4x": 147,
    "sniper": 110,
    "freelook": 106
  },
  {
    "name": "vivo Y28",
    "general": 135,
    "reddot": 135,
    "scope2x": 121,
    "scope4x": 100,
    "sniper": 127,
    "freelook": 89
  },
  {
    "name": "vivo Y27",
    "general": 109,
    "reddot": 136,
    "scope2x": 121,
    "scope4x": 150,
    "sniper": 83,
    "freelook": 99
  },
  {
    "name": "vivo X200",
    "general": 132,
    "reddot": 143,
    "scope2x": 152,
    "scope4x": 140,
    "sniper": 128,
    "freelook": 124
  },
  {
    "name": "vivo X200 Pro",
    "general": 99,
    "reddot": 106,
    "scope2x": 141,
    "scope4x": 127,
    "sniper": 130,
    "freelook": 80
  },
  {
    "name": "Google Pixel 9 Pro XL",
    "general": 87,
    "reddot": 87,
    "scope2x": 160,
    "scope4x": 108,
    "sniper": 86,
    "freelook": 133
  },
  {
    "name": "Google Pixel 9 Pro",
    "general": 125,
    "reddot": 132,
    "scope2x": 122,
    "scope4x": 125,
    "sniper": 108,
    "freelook": 148
  },
  {
    "name": "Google Pixel 9",
    "general": 98,
    "reddot": 141,
    "scope2x": 84,
    "scope4x": 156,
    "sniper": 150,
    "freelook": 89
  },
  {
    "name": "Google Pixel 8 Pro",
    "general": 137,
    "reddot": 116,
    "scope2x": 99,
    "scope4x": 116,
    "sniper": 82,
    "freelook": 80
  },
  {
    "name": "Google Pixel 8",
    "general": 116,
    "reddot": 116,
    "scope2x": 93,
    "scope4x": 105,
    "sniper": 131,
    "freelook": 149
  },
  {
    "name": "Google Pixel 7 Pro",
    "general": 86,
    "reddot": 114,
    "scope2x": 83,
    "scope4x": 104,
    "sniper": 109,
    "freelook": 126
  },
  {
    "name": "Google Pixel 7",
    "general": 107,
    "reddot": 96,
    "scope2x": 108,
    "scope4x": 151,
    "sniper": 103,
    "freelook": 144
  },
  {
    "name": "OnePlus 13",
    "general": 145,
    "reddot": 89,
    "scope2x": 147,
    "scope4x": 87,
    "sniper": 85,
    "freelook": 146
  },
  {
    "name": "OnePlus 13R",
    "general": 111,
    "reddot": 143,
    "scope2x": 154,
    "scope4x": 91,
    "sniper": 82,
    "freelook": 94
  },
  {
    "name": "OnePlus 12",
    "general": 143,
    "reddot": 132,
    "scope2x": 147,
    "scope4x": 141,
    "sniper": 108,
    "freelook": 88
  },
  {
    "name": "OnePlus 12R",
    "general": 148,
    "reddot": 126,
    "scope2x": 115,
    "scope4x": 153,
    "sniper": 136,
    "freelook": 151
  },
  {
    "name": "OnePlus Nord 4",
    "general": 100,
    "reddot": 85,
    "scope2x": 111,
    "scope4x": 105,
    "sniper": 144,
    "freelook": 109
  },
  {
    "name": "OnePlus Nord CE 4",
    "general": 126,
    "reddot": 132,
    "scope2x": 106,
    "scope4x": 80,
    "sniper": 153,
    "freelook": 84
  },
  {
    "name": "Nokia G42",
    "general": 85,
    "reddot": 93,
    "scope2x": 116,
    "scope4x": 128,
    "sniper": 89,
    "freelook": 133
  },
  {
    "name": "Nokia G22",
    "general": 90,
    "reddot": 157,
    "scope2x": 141,
    "scope4x": 117,
    "sniper": 133,
    "freelook": 122
  },
  {
    "name": "Nokia G21",
    "general": 141,
    "reddot": 112,
    "scope2x": 120,
    "scope4x": 94,
    "sniper": 94,
    "freelook": 152
  },
  {
    "name": "Nokia C32",
    "general": 143,
    "reddot": 133,
    "scope2x": 144,
    "scope4x": 145,
    "sniper": 105,
    "freelook": 120
  },
  {
    "name": "Nokia C22",
    "general": 154,
    "reddot": 92,
    "scope2x": 150,
    "scope4x": 109,
    "sniper": 115,
    "freelook": 136
  },
  {
    "name": "Nokia XR21",
    "general": 143,
    "reddot": 97,
    "scope2x": 123,
    "scope4x": 156,
    "sniper": 85,
    "freelook": 122
  },
  {
    "name": "itel S25 Ultra",
    "general": 83,
    "reddot": 85,
    "scope2x": 133,
    "scope4x": 86,
    "sniper": 85,
    "freelook": 126
  },
  {
    "name": "itel a70",
    "general": 130,
    "reddot": 118,
    "scope2x": 105,
    "scope4x": 143,
    "sniper": 80,
    "freelook": 80
  },
  {
    "name": "itel S24",
    "general": 139,
    "reddot": 94,
    "scope2x": 119,
    "scope4x": 100,
    "sniper": 118,
    "freelook": 147
  },
  {
    "name": "itel P65",
    "general": 96,
    "reddot": 99,
    "scope2x": 99,
    "scope4x": 110,
    "sniper": 126,
    "freelook": 124
  },
  {
    "name": "itel P55",
    "general": 154,
    "reddot": 118,
    "scope2x": 95,
    "scope4x": 86,
    "sniper": 147,
    "freelook": 108
  },
  {
    "name": "itel P40",
    "general": 125,
    "reddot": 140,
    "scope2x": 130,
    "scope4x": 108,
    "sniper": 90,
    "freelook": 125
  },
  {
    "name": "OPPO A80",
    "general": 105,
    "reddot": 157,
    "scope2x": 126,
    "scope4x": 137,
    "sniper": 94,
    "freelook": 145
  },
  {
    "name": "OPPO A70",
    "general": 80,
    "reddot": 110,
    "scope2x": 156,
    "scope4x": 89,
    "sniper": 87,
    "freelook": 126
  },
  {
    "name": "TECNO Spark 10",
    "general": 87,
    "reddot": 101,
    "scope2x": 148,
    "scope4x": 124,
    "sniper": 95,
    "freelook": 138
  },
  {
    "name": "TECNO Spark 10 Pro",
    "general": 98,
    "reddot": 109,
    "scope2x": 116,
    "scope4x": 148,
    "sniper": 110,
    "freelook": 97
  },
  {
    "name": "TECNO Spark 9",
    "general": 84,
    "reddot": 129,
    "scope2x": 81,
    "scope4x": 87,
    "sniper": 112,
    "freelook": 114
  },
  {
    "name": "TECNO Spark 8C",
    "general": 89,
    "reddot": 93,
    "scope2x": 124,
    "scope4x": 138,
    "sniper": 139,
    "freelook": 115
  },
  {
    "name": "TECNO Spark Go 2024",
    "general": 120,
    "reddot": 109,
    "scope2x": 127,
    "scope4x": 120,
    "sniper": 158,
    "freelook": 130
  },
  {
    "name": "TECNO Spark Go 2023",
    "general": 140,
    "reddot": 140,
    "scope2x": 109,
    "scope4x": 128,
    "sniper": 127,
    "freelook": 91
  },
  {
    "name": "TECNO Camon 19",
    "general": 94,
    "reddot": 152,
    "scope2x": 149,
    "scope4x": 80,
    "sniper": 151,
    "freelook": 122
  },
  {
    "name": "TECNO Camon 19 Pro",
    "general": 153,
    "reddot": 128,
    "scope2x": 81,
    "scope4x": 152,
    "sniper": 153,
    "freelook": 142
  },
  {
    "name": "TECNO Camon 18",
    "general": 101,
    "reddot": 105,
    "scope2x": 114,
    "scope4x": 126,
    "sniper": 155,
    "freelook": 158
  },
  {
    "name": "TECNO Camon 17",
    "general": 98,
    "reddot": 156,
    "scope2x": 120,
    "scope4x": 160,
    "sniper": 93,
    "freelook": 112
  },
  {
    "name": "TECNO Pova Neo",
    "general": 113,
    "reddot": 95,
    "scope2x": 114,
    "scope4x": 153,
    "sniper": 136,
    "freelook": 108
  },
  {
    "name": "TECNO Pova Neo 2",
    "general": 89,
    "reddot": 142,
    "scope2x": 126,
    "scope4x": 156,
    "sniper": 150,
    "freelook": 101
  },
  {
    "name": "TECNO Pova Neo 3",
    "general": 113,
    "reddot": 82,
    "scope2x": 105,
    "scope4x": 150,
    "sniper": 95,
    "freelook": 152
  },
  {
    "name": "TECNO Phantom X",
    "general": 129,
    "reddot": 111,
    "scope2x": 83,
    "scope4x": 99,
    "sniper": 132,
    "freelook": 95
  },
  {
    "name": "TECNO Phantom X2",
    "general": 93,
    "reddot": 159,
    "scope2x": 86,
    "scope4x": 158,
    "sniper": 130,
    "freelook": 156
  },
  {
    "name": "TECNO Phantom X2 Pro",
    "general": 133,
    "reddot": 143,
    "scope2x": 85,
    "scope4x": 153,
    "sniper": 154,
    "freelook": 119
  },
  {
    "name": "Tecno pop 10",
    "general": 125,
    "reddot": 143,
    "scope2x": 137,
    "scope4x": 129,
    "sniper": 82,
    "freelook": 144
  },
  {
    "name": "Tecno pop 10c",
    "general": 129,
    "reddot": 116,
    "scope2x": 104,
    "scope4x": 139,
    "sniper": 129,
    "freelook": 133
  },
  {
    "name": "TECNO Pop 8",
    "general": 131,
    "reddot": 90,
    "scope2x": 156,
    "scope4x": 146,
    "sniper": 150,
    "freelook": 123
  },
  {
    "name": "TECNO Pop 7",
    "general": 158,
    "reddot": 105,
    "scope2x": 113,
    "scope4x": 110,
    "sniper": 156,
    "freelook": 130
  },
  {
    "name": "TECNO Pop 6",
    "general": 153,
    "reddot": 147,
    "scope2x": 143,
    "scope4x": 153,
    "sniper": 84,
    "freelook": 153
  },
  {
    "name": "Infinix Note 12",
    "general": 145,
    "reddot": 131,
    "scope2x": 137,
    "scope4x": 87,
    "sniper": 132,
    "freelook": 108
  },
  {
    "name": "Infinix Note 12 Pro",
    "general": 115,
    "reddot": 88,
    "scope2x": 112,
    "scope4x": 140,
    "sniper": 139,
    "freelook": 93
  },
  {
    "name": "Infinix Note 11",
    "general": 94,
    "reddot": 91,
    "scope2x": 144,
    "scope4x": 87,
    "sniper": 96,
    "freelook": 138
  },
  {
    "name": "Infinix Note 10",
    "general": 102,
    "reddot": 93,
    "scope2x": 88,
    "scope4x": 115,
    "sniper": 145,
    "freelook": 91
  },
  {
    "name": "Infinix Hot 20",
    "general": 86,
    "reddot": 95,
    "scope2x": 146,
    "scope4x": 128,
    "sniper": 154,
    "freelook": 114
  },
  {
    "name": "Infinix Hot 20i",
    "general": 127,
    "reddot": 156,
    "scope2x": 143,
    "scope4x": 115,
    "sniper": 107,
    "freelook": 131
  },
  {
    "name": "Infinix Hot 12",
    "general": 131,
    "reddot": 122,
    "scope2x": 119,
    "scope4x": 99,
    "sniper": 90,
    "freelook": 157
  },
  {
    "name": "Infinix Hot 11",
    "general": 156,
    "reddot": 118,
    "scope2x": 101,
    "scope4x": 159,
    "sniper": 92,
    "freelook": 103
  },
  {
    "name": "Infinix Hot 10",
    "general": 129,
    "reddot": 122,
    "scope2x": 156,
    "scope4x": 117,
    "sniper": 120,
    "freelook": 96
  },
  {
    "name": "Infinix Smart 7",
    "general": 147,
    "reddot": 148,
    "scope2x": 114,
    "scope4x": 141,
    "sniper": 145,
    "freelook": 97
  },
  {
    "name": "Infinix Smart 6",
    "general": 158,
    "reddot": 145,
    "scope2x": 141,
    "scope4x": 136,
    "sniper": 154,
    "freelook": 139
  },
  {
    "name": "Infinix Smart 5",
    "general": 80,
    "reddot": 135,
    "scope2x": 143,
    "scope4x": 136,
    "sniper": 122,
    "freelook": 99
  },
  {
    "name": "Infinix Zero Ultra",
    "general": 114,
    "reddot": 154,
    "scope2x": 127,
    "scope4x": 123,
    "sniper": 103,
    "freelook": 92
  },
  {
    "name": "Infinix Zero X",
    "general": 94,
    "reddot": 82,
    "scope2x": 90,
    "scope4x": 139,
    "sniper": 122,
    "freelook": 93
  },
  {
    "name": "Infinix Zero 5G",
    "general": 81,
    "reddot": 148,
    "scope2x": 143,
    "scope4x": 142,
    "sniper": 147,
    "freelook": 102
  },
  {
    "name": "Infinix Zero 20",
    "general": 81,
    "reddot": 110,
    "scope2x": 111,
    "scope4x": 152,
    "sniper": 158,
    "freelook": 133
  },
  {
    "name": "OPPO A73",
    "general": 82,
    "reddot": 97,
    "scope2x": 117,
    "scope4x": 115,
    "sniper": 86,
    "freelook": 159
  },
  {
    "name": "OPPO A72",
    "general": 145,
    "reddot": 134,
    "scope2x": 124,
    "scope4x": 84,
    "sniper": 111,
    "freelook": 128
  },
  {
    "name": "OPPO A71",
    "general": 150,
    "reddot": 87,
    "scope2x": 99,
    "scope4x": 136,
    "sniper": 90,
    "freelook": 100
  },
  {
    "name": "OPPO A53",
    "general": 109,
    "reddot": 105,
    "scope2x": 138,
    "scope4x": 124,
    "sniper": 97,
    "freelook": 118
  },
  {
    "name": "OPPO A52",
    "general": 98,
    "reddot": 85,
    "scope2x": 108,
    "scope4x": 132,
    "sniper": 131,
    "freelook": 119
  },
  {
    "name": "OPPO A51",
    "general": 82,
    "reddot": 105,
    "scope2x": 123,
    "scope4x": 95,
    "sniper": 113,
    "freelook": 97
  },
  {
    "name": "OPPO A33",
    "general": 115,
    "reddot": 115,
    "scope2x": 104,
    "scope4x": 86,
    "sniper": 132,
    "freelook": 145
  },
  {
    "name": "OPPO A32",
    "general": 127,
    "reddot": 137,
    "scope2x": 91,
    "scope4x": 128,
    "sniper": 122,
    "freelook": 131
  },
  {
    "name": "OPPO A23",
    "general": 157,
    "reddot": 109,
    "scope2x": 145,
    "scope4x": 152,
    "sniper": 119,
    "freelook": 86
  },
  {
    "name": "OPPO A22",
    "general": 92,
    "reddot": 99,
    "scope2x": 122,
    "scope4x": 122,
    "sniper": 136,
    "freelook": 87
  },
  {
    "name": "OPPO A13",
    "general": 134,
    "reddot": 132,
    "scope2x": 129,
    "scope4x": 95,
    "sniper": 100,
    "freelook": 84
  },
  {
    "name": "OPPO A12",
    "general": 93,
    "reddot": 97,
    "scope2x": 121,
    "scope4x": 88,
    "sniper": 129,
    "freelook": 107
  },
  {
    "name": "Samsung Galaxy M55",
    "general": 149,
    "reddot": 80,
    "scope2x": 123,
    "scope4x": 144,
    "sniper": 87,
    "freelook": 156
  },
  {
    "name": "Samsung Galaxy M54",
    "general": 141,
    "reddot": 158,
    "scope2x": 102,
    "scope4x": 159,
    "sniper": 106,
    "freelook": 123
  },
  {
    "name": "Samsung Galaxy M34",
    "general": 160,
    "reddot": 113,
    "scope2x": 113,
    "scope4x": 139,
    "sniper": 145,
    "freelook": 99
  },
  {
    "name": "Samsung Galaxy M14",
    "general": 146,
    "reddot": 151,
    "scope2x": 120,
    "scope4x": 116,
    "sniper": 93,
    "freelook": 134
  },
  {
    "name": "Samsung Galaxy F54",
    "general": 149,
    "reddot": 102,
    "scope2x": 110,
    "scope4x": 90,
    "sniper": 82,
    "freelook": 153
  },
  {
    "name": "itel S22 Ultra",
    "general": 150,
    "reddot": 145,
    "scope2x": 135,
    "scope4x": 107,
    "sniper": 153,
    "freelook": 104
  },
  {
    "name": "itel S21 Ultra",
    "general": 129,
    "reddot": 153,
    "scope2x": 103,
    "scope4x": 96,
    "sniper": 98,
    "freelook": 144
  },
  {
    "name": "Infinix Note 20 Ultra",
    "general": 126,
    "reddot": 130,
    "scope2x": 111,
    "scope4x": 107,
    "sniper": 154,
    "freelook": 136
  },
  {
    "name": "Apple iPhone XS Max",
    "general": 109,
    "reddot": 76,
    "scope2x": 130,
    "scope4x": 133,
    "sniper": 71,
    "freelook": 140
  },
  {
    "name": "Apple iPhone XS",
    "general": 80,
    "reddot": 85,
    "scope2x": 105,
    "scope4x": 66,
    "sniper": 134,
    "freelook": 103
  },
  {
    "name": "Apple iPhone XR",
    "general": 138,
    "reddot": 105,
    "scope2x": 100,
    "scope4x": 121,
    "sniper": 61,
    "freelook": 61
  },
  {
    "name": "Apple iPhone X",
    "general": 73,
    "reddot": 119,
    "scope2x": 112,
    "scope4x": 111,
    "sniper": 137,
    "freelook": 80
  },
  {
    "name": "Apple iPhone 8 Plus",
    "general": 127,
    "reddot": 113,
    "scope2x": 118,
    "scope4x": 91,
    "sniper": 119,
    "freelook": 90
  },
  {
    "name": "Apple iPhone 8",
    "general": 133,
    "reddot": 92,
    "scope2x": 134,
    "scope4x": 82,
    "sniper": 95,
    "freelook": 137
  },
  {
    "name": "Apple iPhone 7 Plus",
    "general": 134,
    "reddot": 88,
    "scope2x": 69,
    "scope4x": 90,
    "sniper": 104,
    "freelook": 117
  },
  {
    "name": "Apple iPhone 7",
    "general": 131,
    "reddot": 123,
    "scope2x": 129,
    "scope4x": 113,
    "sniper": 75,
    "freelook": 122
  },
  {
    "name": "Apple iPhone SE (2022)",
    "general": 145,
    "reddot": 129,
    "scope2x": 89,
    "scope4x": 85,
    "sniper": 122,
    "freelook": 79
  },
  {
    "name": "Apple iPhone SE (2020)",
    "general": 121,
    "reddot": 109,
    "scope2x": 113,
    "scope4x": 96,
    "sniper": 124,
    "freelook": 105
  },
  {
    "name": "Apple iPhone 12 Mini",
    "general": 72,
    "reddot": 129,
    "scope2x": 100,
    "scope4x": 60,
    "sniper": 150,
    "freelook": 82
  },
  {
    "name": "Apple iPhone 13 Mini",
    "general": 123,
    "reddot": 81,
    "scope2x": 75,
    "scope4x": 76,
    "sniper": 150,
    "freelook": 78
  },
  {
    "name": "Apple iPhone 14 Pro",
    "general": 121,
    "reddot": 131,
    "scope2x": 70,
    "scope4x": 110,
    "sniper": 114,
    "freelook": 107
  },
  {
    "name": "Apple iPhone 14 Pro Max",
    "general": 110,
    "reddot": 66,
    "scope2x": 121,
    "scope4x": 136,
    "sniper": 89,
    "freelook": 105
  },
  {
    "name": "Apple iPhone 15 Pro",
    "general": 142,
    "reddot": 62,
    "scope2x": 120,
    "scope4x": 106,
    "sniper": 125,
    "freelook": 119
  },
  {
    "name": "Apple iPhone 15 Pro Max",
    "general": 103,
    "reddot": 91,
    "scope2x": 90,
    "scope4x": 127,
    "sniper": 75,
    "freelook": 127
  },
  {
    "name": "Redmi Note 12 Pro",
    "general": 81,
    "reddot": 144,
    "scope2x": 139,
    "scope4x": 159,
    "sniper": 80,
    "freelook": 129
  },
  {
    "name": "Redmi Note 12",
    "general": 136,
    "reddot": 107,
    "scope2x": 93,
    "scope4x": 102,
    "sniper": 131,
    "freelook": 101
  },
  {
    "name": "Redmi Note 11 Pro",
    "general": 127,
    "reddot": 116,
    "scope2x": 151,
    "scope4x": 96,
    "sniper": 130,
    "freelook": 153
  },
  {
    "name": "Redmi Note 11",
    "general": 100,
    "reddot": 127,
    "scope2x": 144,
    "scope4x": 112,
    "sniper": 92,
    "freelook": 92
  },
  {
    "name": "Redmi Note 10 Pro",
    "general": 111,
    "reddot": 110,
    "scope2x": 116,
    "scope4x": 106,
    "sniper": 150,
    "freelook": 151
  },
  {
    "name": "Redmi Note 10",
    "general": 142,
    "reddot": 103,
    "scope2x": 90,
    "scope4x": 112,
    "sniper": 154,
    "freelook": 93
  },
  {
    "name": "Redmi 13C",
    "general": 90,
    "reddot": 126,
    "scope2x": 154,
    "scope4x": 127,
    "sniper": 149,
    "freelook": 117
  },
  {
    "name": "Redmi 12",
    "general": 88,
    "reddot": 83,
    "scope2x": 89,
    "scope4x": 97,
    "sniper": 149,
    "freelook": 152
  },
  {
    "name": "Redmi 10",
    "general": 140,
    "reddot": 99,
    "scope2x": 84,
    "scope4x": 119,
    "sniper": 82,
    "freelook": 120
  },
  {
    "name": "Redmi A3",
    "general": 143,
    "reddot": 81,
    "scope2x": 102,
    "scope4x": 109,
    "sniper": 103,
    "freelook": 110
  },
  {
    "name": "Redmi A2+",
    "general": 102,
    "reddot": 152,
    "scope2x": 104,
    "scope4x": 101,
    "sniper": 133,
    "freelook": 157
  },
  {
    "name": "Xiaomi 13T",
    "general": 150,
    "reddot": 127,
    "scope2x": 114,
    "scope4x": 85,
    "sniper": 81,
    "freelook": 136
  },
  {
    "name": "Xiaomi 13 Lite",
    "general": 112,
    "reddot": 142,
    "scope2x": 151,
    "scope4x": 149,
    "sniper": 90,
    "freelook": 102
  },
  {
    "name": "Xiaomi 12T Pro",
    "general": 147,
    "reddot": 108,
    "scope2x": 81,
    "scope4x": 92,
    "sniper": 142,
    "freelook": 117
  },
  {
    "name": "Xiaomi 12 Lite",
    "general": 112,
    "reddot": 127,
    "scope2x": 150,
    "scope4x": 116,
    "sniper": 93,
    "freelook": 126
  },
  {
    "name": "POCO X6 Pro",
    "general": 139,
    "reddot": 115,
    "scope2x": 90,
    "scope4x": 142,
    "sniper": 87,
    "freelook": 82
  },
  {
    "name": "POCO X6",
    "general": 93,
    "reddot": 91,
    "scope2x": 139,
    "scope4x": 80,
    "sniper": 114,
    "freelook": 100
  },
  {
    "name": "POCO X5 Pro",
    "general": 148,
    "reddot": 115,
    "scope2x": 158,
    "scope4x": 97,
    "sniper": 119,
    "freelook": 127
  },
  {
    "name": "POCO X5",
    "general": 94,
    "reddot": 86,
    "scope2x": 83,
    "scope4x": 133,
    "sniper": 86,
    "freelook": 114
  },
  {
    "name": "POCO F5 Pro",
    "general": 84,
    "reddot": 119,
    "scope2x": 83,
    "scope4x": 130,
    "sniper": 106,
    "freelook": 113
  },
  {
    "name": "POCO F5",
    "general": 83,
    "reddot": 88,
    "scope2x": 81,
    "scope4x": 121,
    "sniper": 157,
    "freelook": 153
  },
  {
    "name": "POCO M6 Pro",
    "general": 121,
    "reddot": 81,
    "scope2x": 135,
    "scope4x": 103,
    "sniper": 130,
    "freelook": 135
  },
  {
    "name": "POCO M5",
    "general": 133,
    "reddot": 129,
    "scope2x": 122,
    "scope4x": 160,
    "sniper": 137,
    "freelook": 154
  },
  {
    "name": "POCO C65",
    "general": 101,
    "reddot": 128,
    "scope2x": 126,
    "scope4x": 101,
    "sniper": 103,
    "freelook": 150
  },
  {
    "name": "POCO C55",
    "general": 137,
    "reddot": 131,
    "scope2x": 138,
    "scope4x": 96,
    "sniper": 112,
    "freelook": 158
  },
  {
    "name": "OPPO Reno 11",
    "general": 90,
    "reddot": 80,
    "scope2x": 152,
    "scope4x": 97,
    "sniper": 125,
    "freelook": 155
  },
  {
    "name": "OPPO Reno 10",
    "general": 98,
    "reddot": 101,
    "scope2x": 97,
    "scope4x": 118,
    "sniper": 110,
    "freelook": 89
  },
  {
    "name": "OPPO Reno 8T",
    "general": 102,
    "reddot": 147,
    "scope2x": 104,
    "scope4x": 118,
    "sniper": 156,
    "freelook": 88
  },
  {
    "name": "OPPO Reno 7",
    "general": 106,
    "reddot": 129,
    "scope2x": 105,
    "scope4x": 147,
    "sniper": 81,
    "freelook": 143
  },
  {
    "name": "OPPO A98",
    "general": 132,
    "reddot": 98,
    "scope2x": 127,
    "scope4x": 130,
    "sniper": 93,
    "freelook": 137
  },
  {
    "name": "OPPO A78",
    "general": 152,
    "reddot": 93,
    "scope2x": 104,
    "scope4x": 124,
    "sniper": 157,
    "freelook": 156
  },
  {
    "name": "OPPO A77",
    "general": 101,
    "reddot": 155,
    "scope2x": 105,
    "scope4x": 138,
    "sniper": 119,
    "freelook": 154
  },
  {
    "name": "OPPO A58",
    "general": 104,
    "reddot": 92,
    "scope2x": 121,
    "scope4x": 108,
    "sniper": 105,
    "freelook": 82
  },
  {
    "name": "OPPO A38",
    "general": 144,
    "reddot": 125,
    "scope2x": 138,
    "scope4x": 158,
    "sniper": 103,
    "freelook": 100
  },
  {
    "name": "OPPO Find N3 Flip",
    "general": 85,
    "reddot": 149,
    "scope2x": 81,
    "scope4x": 90,
    "sniper": 156,
    "freelook": 106
  },
  {
    "name": "vivo V29",
    "general": 126,
    "reddot": 129,
    "scope2x": 103,
    "scope4x": 127,
    "sniper": 91,
    "freelook": 151
  },
  {
    "name": "vivo V27",
    "general": 140,
    "reddot": 123,
    "scope2x": 88,
    "scope4x": 120,
    "sniper": 136,
    "freelook": 92
  },
  {
    "name": "vivo V25",
    "general": 120,
    "reddot": 85,
    "scope2x": 96,
    "scope4x": 159,
    "sniper": 128,
    "freelook": 135
  },
  {
    "name": "vivo Y36",
    "general": 148,
    "reddot": 150,
    "scope2x": 138,
    "scope4x": 106,
    "sniper": 123,
    "freelook": 150
  },
  {
    "name": "vivo Y22",
    "general": 122,
    "reddot": 85,
    "scope2x": 154,
    "scope4x": 114,
    "sniper": 149,
    "freelook": 119
  },
  {
    "name": "vivo Y21",
    "general": 81,
    "reddot": 108,
    "scope2x": 136,
    "scope4x": 119,
    "sniper": 99,
    "freelook": 86
  },
  {
    "name": "vivo Y17s",
    "general": 92,
    "reddot": 120,
    "scope2x": 157,
    "scope4x": 103,
    "sniper": 124,
    "freelook": 104
  },
  {
    "name": "vivo Y03",
    "general": 118,
    "reddot": 141,
    "scope2x": 84,
    "scope4x": 82,
    "sniper": 155,
    "freelook": 156
  },
  {
    "name": "vivo X100 Pro",
    "general": 103,
    "reddot": 120,
    "scope2x": 116,
    "scope4x": 157,
    "sniper": 111,
    "freelook": 104
  },
  {
    "name": "vivo X90 Pro",
    "general": 102,
    "reddot": 97,
    "scope2x": 104,
    "scope4x": 156,
    "sniper": 83,
    "freelook": 94
  },
  {
    "name": "itel S23+",
    "general": 82,
    "reddot": 143,
    "scope2x": 120,
    "scope4x": 155,
    "sniper": 88,
    "freelook": 100
  },
  {
    "name": "itel S23",
    "general": 126,
    "reddot": 87,
    "scope2x": 121,
    "scope4x": 129,
    "sniper": 104,
    "freelook": 156
  },
  {
    "name": "itel S18",
    "general": 124,
    "reddot": 146,
    "scope2x": 138,
    "scope4x": 115,
    "sniper": 96,
    "freelook": 159
  },
  {
    "name": "itel P55+",
    "general": 118,
    "reddot": 86,
    "scope2x": 131,
    "scope4x": 135,
    "sniper": 135,
    "freelook": 154
  },
  {
    "name": "itel P38",
    "general": 87,
    "reddot": 98,
    "scope2x": 160,
    "scope4x": 138,
    "sniper": 90,
    "freelook": 151
  },
  {
    "name": "itel P37",
    "general": 110,
    "reddot": 109,
    "scope2x": 143,
    "scope4x": 81,
    "sniper": 127,
    "freelook": 120
  },
  {
    "name": "OPPO A58",
    "general": 96,
    "reddot": 98,
    "scope2x": 146,
    "scope4x": 89,
    "sniper": 128,
    "freelook": 110
  },
  {
    "name": "OPPO A49",
    "general": 107,
    "reddot": 134,
    "scope2x": 104,
    "scope4x": 109,
    "sniper": 93,
    "freelook": 143
  },
  {
    "name": "OPPO A48",
    "general": 135,
    "reddot": 131,
    "scope2x": 155,
    "scope4x": 149,
    "sniper": 150,
    "freelook": 125
  },
  {
    "name": "itel Vision 3",
    "general": 132,
    "reddot": 132,
    "scope2x": 136,
    "scope4x": 143,
    "sniper": 84,
    "freelook": 101
  },
  {
    "name": "Nokia G60",
    "general": 88,
    "reddot": 119,
    "scope2x": 153,
    "scope4x": 152,
    "sniper": 116,
    "freelook": 96
  },
  {
    "name": "Nokia G50",
    "general": 151,
    "reddot": 99,
    "scope2x": 100,
    "scope4x": 149,
    "sniper": 138,
    "freelook": 119
  },
  {
    "name": "Nokia G11",
    "general": 88,
    "reddot": 130,
    "scope2x": 93,
    "scope4x": 80,
    "sniper": 120,
    "freelook": 81
  },
  {
    "name": "Nokia G10",
    "general": 157,
    "reddot": 113,
    "scope2x": 119,
    "scope4x": 93,
    "sniper": 154,
    "freelook": 95
  },
  {
    "name": "Nokia C31",
    "general": 120,
    "reddot": 100,
    "scope2x": 96,
    "scope4x": 108,
    "sniper": 124,
    "freelook": 88
  },
  {
    "name": "Nokia C21 Plus",
    "general": 114,
    "reddot": 97,
    "scope2x": 158,
    "scope4x": 151,
    "sniper": 104,
    "freelook": 89
  },
  {
    "name": "Nokia C12",
    "general": 109,
    "reddot": 150,
    "scope2x": 156,
    "scope4x": 137,
    "sniper": 115,
    "freelook": 105
  },
  {
    "name": "vivo X30",
    "general": 133,
    "reddot": 98,
    "scope2x": 146,
    "scope4x": 93,
    "sniper": 147,
    "freelook": 86
  },
  {
    "name": "Nokia XR20",
    "general": 136,
    "reddot": 153,
    "scope2x": 94,
    "scope4x": 131,
    "sniper": 116,
    "freelook": 154
  },
  {
    "name": "8.3",
    "general": 92,
    "reddot": 121,
    "scope2x": 86,
    "scope4x": 80,
    "sniper": 131,
    "freelook": 90
  },
  {
    "name": "itel P60 Pro",
    "general": 137,
    "reddot": 112,
    "scope2x": 98,
    "scope4x": 120,
    "sniper": 141,
    "freelook": 95
  },
  {
    "name": "itel P50 Pro",
    "general": 155,
    "reddot": 115,
    "scope2x": 160,
    "scope4x": 131,
    "sniper": 110,
    "freelook": 91
  },
  {
    "name": "Nova 12",
    "general": 92,
    "reddot": 129,
    "scope2x": 111,
    "scope4x": 127,
    "sniper": 143,
    "freelook": 125
  },
  {
    "name": "Nova 11",
    "general": 155,
    "reddot": 118,
    "scope2x": 104,
    "scope4x": 130,
    "sniper": 152,
    "freelook": 107
  },
  {
    "name": "Nova Y91",
    "general": 91,
    "reddot": 113,
    "scope2x": 118,
    "scope4x": 136,
    "sniper": 110,
    "freelook": 128
  },
  {
    "name": "Mate 80 Pro",
    "general": 97,
    "reddot": 110,
    "scope2x": 104,
    "scope4x": 134,
    "sniper": 157,
    "freelook": 142
  },
  {
    "name": "Mate 50 Pro",
    "general": 126,
    "reddot": 106,
    "scope2x": 97,
    "scope4x": 85,
    "sniper": 160,
    "freelook": 106
  },
  {
    "name": "vivo Y9a",
    "general": 90,
    "reddot": 99,
    "scope2x": 139,
    "scope4x": 115,
    "sniper": 127,
    "freelook": 138
  },
  {
    "name": "vivo Y7a",
    "general": 117,
    "reddot": 115,
    "scope2x": 110,
    "scope4x": 102,
    "sniper": 142,
    "freelook": 111
  },
  {
    "name": "vivo Y6p",
    "general": 89,
    "reddot": 130,
    "scope2x": 85,
    "scope4x": 82,
    "sniper": 123,
    "freelook": 142
  },
  {
    "name": "14 Pro+",
    "general": 96,
    "reddot": 143,
    "scope2x": 143,
    "scope4x": 114,
    "sniper": 106,
    "freelook": 142
  },
  {
    "name": "13 Pro+",
    "general": 94,
    "reddot": 148,
    "scope2x": 148,
    "scope4x": 103,
    "sniper": 94,
    "freelook": 147
  },
  {
    "name": "12 Pro",
    "general": 118,
    "reddot": 122,
    "scope2x": 132,
    "scope4x": 145,
    "sniper": 124,
    "freelook": 92
  },
  {
    "name": "11",
    "general": 131,
    "reddot": 93,
    "scope2x": 125,
    "scope4x": 117,
    "sniper": 95,
    "freelook": 102
  },
  {
    "name": "Nokia C67",
    "general": 88,
    "reddot": 118,
    "scope2x": 131,
    "scope4x": 90,
    "sniper": 89,
    "freelook": 159
  },
  {
    "name": "Nokia C55",
    "general": 150,
    "reddot": 159,
    "scope2x": 89,
    "scope4x": 154,
    "sniper": 153,
    "freelook": 82
  },
  {
    "name": "Nokia C53",
    "general": 134,
    "reddot": 98,
    "scope2x": 126,
    "scope4x": 104,
    "sniper": 99,
    "freelook": 160
  },
  {
    "name": "Narzo 75",
    "general": 83,
    "reddot": 125,
    "scope2x": 116,
    "scope4x": 102,
    "sniper": 140,
    "freelook": 83
  },
  {
    "name": "GT 6",
    "general": 107,
    "reddot": 134,
    "scope2x": 121,
    "scope4x": 144,
    "sniper": 102,
    "freelook": 104
  },
  {
    "name": "GT Neo 5",
    "general": 116,
    "reddot": 152,
    "scope2x": 135,
    "scope4x": 115,
    "sniper": 152,
    "freelook": 114
  },
  {
    "name": "iPhone 6s Plus",
    "general": 148,
    "reddot": 69,
    "scope2x": 137,
    "scope4x": 67,
    "sniper": 85,
    "freelook": 75
  },
  {
    "name": "iPhone 6s",
    "general": 98,
    "reddot": 42,
    "scope2x": 100,
    "scope4x": 104,
    "sniper": 118,
    "freelook": 90
  },
  {
    "name": "iPhone 6",
    "general": 145,
    "reddot": 125,
    "scope2x": 141,
    "scope4x": 72,
    "sniper": 139,
    "freelook": 66
  },
  {
    "name": "iPhone 5s",
    "general": 150,
    "reddot": 144,
    "scope2x": 120,
    "scope4x": 140,
    "sniper": 110,
    "freelook": 100
  },
  {
    "name": "Samsung Galaxy S20 Ultra",
    "general": 81,
    "reddot": 109,
    "scope2x": 118,
    "scope4x": 132,
    "sniper": 149,
    "freelook": 153
  },
  {
    "name": "Samsung Galaxy S20+",
    "general": 102,
    "reddot": 132,
    "scope2x": 87,
    "scope4x": 117,
    "sniper": 106,
    "freelook": 144
  },
  {
    "name": "Samsung Galaxy S10+",
    "general": 84,
    "reddot": 130,
    "scope2x": 109,
    "scope4x": 122,
    "sniper": 125,
    "freelook": 138
  },
  {
    "name": "Samsung Galaxy A50",
    "general": 158,
    "reddot": 144,
    "scope2x": 92,
    "scope4x": 153,
    "sniper": 147,
    "freelook": 142
  },
  {
    "name": "Samsung Galaxy M31",
    "general": 135,
    "reddot": 93,
    "scope2x": 119,
    "scope4x": 87,
    "sniper": 139,
    "freelook": 158
  },
  {
    "name": "Samsung Galaxy J7 Pro",
    "general": 151,
    "reddot": 99,
    "scope2x": 84,
    "scope4x": 80,
    "sniper": 135,
    "freelook": 145
  },
  {
    "name": "TECNO Spark 7 Pro",
    "general": 157,
    "reddot": 96,
    "scope2x": 100,
    "scope4x": 93,
    "sniper": 151,
    "freelook": 98
  },
  {
    "name": "TECNO Spark 7",
    "general": 88,
    "reddot": 138,
    "scope2x": 138,
    "scope4x": 138,
    "sniper": 115,
    "freelook": 120
  },
  {
    "name": "TECNO Spark 6",
    "general": 147,
    "reddot": 96,
    "scope2x": 148,
    "scope4x": 81,
    "sniper": 95,
    "freelook": 104
  },
  {
    "name": "TECNO Spark 5",
    "general": 123,
    "reddot": 141,
    "scope2x": 126,
    "scope4x": 97,
    "sniper": 154,
    "freelook": 126
  },
  {
    "name": "TECNO Spark 4",
    "general": 84,
    "reddot": 157,
    "scope2x": 124,
    "scope4x": 89,
    "sniper": 89,
    "freelook": 101
  },
  {
    "name": "TECNO Camon 16 Premier",
    "general": 142,
    "reddot": 92,
    "scope2x": 94,
    "scope4x": 103,
    "sniper": 106,
    "freelook": 143
  },
  {
    "name": "TECNO Camon 16",
    "general": 145,
    "reddot": 106,
    "scope2x": 157,
    "scope4x": 82,
    "sniper": 130,
    "freelook": 97
  },
  {
    "name": "TECNO Camon 15",
    "general": 149,
    "reddot": 159,
    "scope2x": 116,
    "scope4x": 137,
    "sniper": 158,
    "freelook": 156
  },
  {
    "name": "TECNO Camon 12",
    "general": 145,
    "reddot": 112,
    "scope2x": 142,
    "scope4x": 84,
    "sniper": 147,
    "freelook": 113
  },
  {
    "name": "TECNO Camon X Pro",
    "general": 80,
    "reddot": 116,
    "scope2x": 140,
    "scope4x": 147,
    "sniper": 122,
    "freelook": 86
  },
  {
    "name": "TECNO Phantom 9",
    "general": 83,
    "reddot": 141,
    "scope2x": 90,
    "scope4x": 159,
    "sniper": 160,
    "freelook": 114
  },
  {
    "name": "TECNO Phantom 8",
    "general": 136,
    "reddot": 148,
    "scope2x": 80,
    "scope4x": 159,
    "sniper": 159,
    "freelook": 116
  },
  {
    "name": "Pouvoir 4",
    "general": 106,
    "reddot": 132,
    "scope2x": 131,
    "scope4x": 124,
    "sniper": 112,
    "freelook": 135
  },
  {
    "name": "Pouvoir 3",
    "general": 144,
    "reddot": 124,
    "scope2x": 145,
    "scope4x": 135,
    "sniper": 156,
    "freelook": 97
  },
  {
    "name": "F2 LTE",
    "general": 118,
    "reddot": 93,
    "scope2x": 110,
    "scope4x": 88,
    "sniper": 148,
    "freelook": 153
  },
  {
    "name": "Infinix Hot S3",
    "general": 128,
    "reddot": 144,
    "scope2x": 137,
    "scope4x": 157,
    "sniper": 83,
    "freelook": 155
  },
  {
    "name": "Infinix Hot S4",
    "general": 116,
    "reddot": 145,
    "scope2x": 121,
    "scope4x": 151,
    "sniper": 96,
    "freelook": 149
  },
  {
    "name": "Infinix Hot 9",
    "general": 131,
    "reddot": 101,
    "scope2x": 93,
    "scope4x": 113,
    "sniper": 90,
    "freelook": 124
  },
  {
    "name": "Infinix Hot 8",
    "general": 125,
    "reddot": 147,
    "scope2x": 81,
    "scope4x": 159,
    "sniper": 145,
    "freelook": 106
  },
  {
    "name": "Infinix Hot 7",
    "general": 81,
    "reddot": 139,
    "scope2x": 150,
    "scope4x": 136,
    "sniper": 154,
    "freelook": 108
  },
  {
    "name": "Infinix Note 8",
    "general": 138,
    "reddot": 82,
    "scope2x": 130,
    "scope4x": 107,
    "sniper": 117,
    "freelook": 103
  },
  {
    "name": "Infinix Note 7",
    "general": 114,
    "reddot": 160,
    "scope2x": 97,
    "scope4x": 110,
    "sniper": 112,
    "freelook": 80
  },
  {
    "name": "Infinix Note 6",
    "general": 124,
    "reddot": 154,
    "scope2x": 158,
    "scope4x": 99,
    "sniper": 154,
    "freelook": 132
  },
  {
    "name": "itel S5 Pro",
    "general": 97,
    "reddot": 114,
    "scope2x": 152,
    "scope4x": 147,
    "sniper": 126,
    "freelook": 85
  },
  {
    "name": "itel S5",
    "general": 108,
    "reddot": 131,
    "scope2x": 123,
    "scope4x": 109,
    "sniper": 155,
    "freelook": 120
  },
  {
    "name": "itel S4",
    "general": 125,
    "reddot": 122,
    "scope2x": 149,
    "scope4x": 94,
    "sniper": 122,
    "freelook": 125
  },
  {
    "name": "Infinix Zero 8",
    "general": 101,
    "reddot": 103,
    "scope2x": 133,
    "scope4x": 115,
    "sniper": 101,
    "freelook": 118
  },
  {
    "name": "Infinix Zero 6",
    "general": 145,
    "reddot": 135,
    "scope2x": 80,
    "scope4x": 85,
    "sniper": 128,
    "freelook": 129
  },
  {
    "name": "Infinix Smart HD 2021",
    "general": 95,
    "reddot": 145,
    "scope2x": 107,
    "scope4x": 149,
    "sniper": 157,
    "freelook": 93
  },
  {
    "name": "Infinix Smart 4",
    "general": 143,
    "reddot": 88,
    "scope2x": 115,
    "scope4x": 144,
    "sniper": 114,
    "freelook": 158
  },
  {
    "name": "itel S10e",
    "general": 109,
    "reddot": 124,
    "scope2x": 138,
    "scope4x": 104,
    "sniper": 111,
    "freelook": 159
  },
  {
    "name": "Infinix Note 10",
    "general": 95,
    "reddot": 129,
    "scope2x": 99,
    "scope4x": 131,
    "sniper": 82,
    "freelook": 132
  },
  {
    "name": "OPPO A80",
    "general": 90,
    "reddot": 138,
    "scope2x": 152,
    "scope4x": 124,
    "sniper": 106,
    "freelook": 116
  },
  {
    "name": "OPPO A70",
    "general": 116,
    "reddot": 83,
    "scope2x": 99,
    "scope4x": 148,
    "sniper": 96,
    "freelook": 119
  },
  {
    "name": "OPPO A40",
    "general": 81,
    "reddot": 87,
    "scope2x": 104,
    "scope4x": 160,
    "sniper": 128,
    "freelook": 93
  },
  {
    "name": "OPPO A30",
    "general": 156,
    "reddot": 147,
    "scope2x": 97,
    "scope4x": 103,
    "sniper": 99,
    "freelook": 100
  },
  {
    "name": "OPPO A20",
    "general": 102,
    "reddot": 97,
    "scope2x": 83,
    "scope4x": 118,
    "sniper": 99,
    "freelook": 149
  },
  {
    "name": "OPPO A10",
    "general": 104,
    "reddot": 80,
    "scope2x": 82,
    "scope4x": 100,
    "sniper": 106,
    "freelook": 160
  },
  {
    "name": "M21",
    "general": 127,
    "reddot": 111,
    "scope2x": 143,
    "scope4x": 141,
    "sniper": 113,
    "freelook": 117
  },
  {
    "name": "M11",
    "general": 153,
    "reddot": 112,
    "scope2x": 117,
    "scope4x": 90,
    "sniper": 91,
    "freelook": 103
  },
  {
    "name": "J8",
    "general": 97,
    "reddot": 90,
    "scope2x": 115,
    "scope4x": 80,
    "sniper": 115,
    "freelook": 82
  },
  {
    "name": "J7 Pro",
    "general": 96,
    "reddot": 110,
    "scope2x": 92,
    "scope4x": 152,
    "sniper": 147,
    "freelook": 99
  },
  {
    "name": "Redmi Note 9 Pro",
    "general": 109,
    "reddot": 87,
    "scope2x": 86,
    "scope4x": 159,
    "sniper": 133,
    "freelook": 127
  },
  {
    "name": "Redmi Note 9",
    "general": 97,
    "reddot": 80,
    "scope2x": 92,
    "scope4x": 151,
    "sniper": 80,
    "freelook": 138
  },
  {
    "name": "Redmi Note 8 Pro",
    "general": 154,
    "reddot": 125,
    "scope2x": 113,
    "scope4x": 129,
    "sniper": 152,
    "freelook": 98
  },
  {
    "name": "Redmi Note 8",
    "general": 121,
    "reddot": 106,
    "scope2x": 84,
    "scope4x": 138,
    "sniper": 121,
    "freelook": 160
  },
  {
    "name": "Redmi Note 7",
    "general": 94,
    "reddot": 81,
    "scope2x": 151,
    "scope4x": 101,
    "sniper": 143,
    "freelook": 108
  },
  {
    "name": "Redmi 9A",
    "general": 100,
    "reddot": 125,
    "scope2x": 114,
    "scope4x": 131,
    "sniper": 134,
    "freelook": 135
  },
  {
    "name": "Redmi 9C",
    "general": 99,
    "reddot": 132,
    "scope2x": 129,
    "scope4x": 100,
    "sniper": 129,
    "freelook": 83
  },
  {
    "name": "Redmi 8A",
    "general": 91,
    "reddot": 157,
    "scope2x": 142,
    "scope4x": 140,
    "sniper": 158,
    "freelook": 138
  },
  {
    "name": "Redmi 8",
    "general": 108,
    "reddot": 138,
    "scope2x": 104,
    "scope4x": 102,
    "sniper": 139,
    "freelook": 89
  },
  {
    "name": "Redmi 7A",
    "general": 114,
    "reddot": 100,
    "scope2x": 90,
    "scope4x": 112,
    "sniper": 93,
    "freelook": 141
  },
  {
    "name": "Mi 11 Ultra",
    "general": 108,
    "reddot": 149,
    "scope2x": 158,
    "scope4x": 97,
    "sniper": 89,
    "freelook": 102
  },
  {
    "name": "Mi 11",
    "general": 99,
    "reddot": 139,
    "scope2x": 153,
    "scope4x": 102,
    "sniper": 88,
    "freelook": 80
  },
  {
    "name": "Mi 10T Pro",
    "general": 129,
    "reddot": 123,
    "scope2x": 152,
    "scope4x": 111,
    "sniper": 128,
    "freelook": 107
  },
  {
    "name": "Mi 10T",
    "general": 108,
    "reddot": 138,
    "scope2x": 153,
    "scope4x": 146,
    "sniper": 103,
    "freelook": 129
  },
  {
    "name": "Mi A3",
    "general": 83,
    "reddot": 89,
    "scope2x": 157,
    "scope4x": 154,
    "sniper": 118,
    "freelook": 101
  },
  {
    "name": "OPPO Reno 6",
    "general": 109,
    "reddot": 151,
    "scope2x": 86,
    "scope4x": 113,
    "sniper": 159,
    "freelook": 81
  },
  {
    "name": "OPPO Reno 5",
    "general": 86,
    "reddot": 147,
    "scope2x": 156,
    "scope4x": 82,
    "sniper": 92,
    "freelook": 124
  },
  {
    "name": "OPPO Reno 4",
    "general": 130,
    "reddot": 89,
    "scope2x": 117,
    "scope4x": 132,
    "sniper": 85,
    "freelook": 105
  },
  {
    "name": "OPPO Reno 3",
    "general": 85,
    "reddot": 91,
    "scope2x": 138,
    "scope4x": 112,
    "sniper": 102,
    "freelook": 83
  },
  {
    "name": "OPPO A95",
    "general": 112,
    "reddot": 151,
    "scope2x": 155,
    "scope4x": 95,
    "sniper": 103,
    "freelook": 157
  },
  {
    "name": "OPPO A74",
    "general": 111,
    "reddot": 132,
    "scope2x": 153,
    "scope4x": 125,
    "sniper": 119,
    "freelook": 155
  },
  {
    "name": "OPPO A54",
    "general": 136,
    "reddot": 148,
    "scope2x": 126,
    "scope4x": 121,
    "sniper": 98,
    "freelook": 109
  },
  {
    "name": "OPPO A53",
    "general": 119,
    "reddot": 121,
    "scope2x": 121,
    "scope4x": 104,
    "sniper": 91,
    "freelook": 82
  },
  {
    "name": "OPPO A31",
    "general": 138,
    "reddot": 128,
    "scope2x": 149,
    "scope4x": 89,
    "sniper": 158,
    "freelook": 81
  },
  {
    "name": "F19",
    "general": 122,
    "reddot": 109,
    "scope2x": 156,
    "scope4x": 113,
    "sniper": 158,
    "freelook": 133
  },
  {
    "name": "vivo V23",
    "general": 102,
    "reddot": 160,
    "scope2x": 133,
    "scope4x": 104,
    "sniper": 147,
    "freelook": 137
  },
  {
    "name": "vivo V21",
    "general": 160,
    "reddot": 151,
    "scope2x": 146,
    "scope4x": 127,
    "sniper": 105,
    "freelook": 106
  },
  {
    "name": "vivo V20",
    "general": 145,
    "reddot": 84,
    "scope2x": 96,
    "scope4x": 127,
    "sniper": 147,
    "freelook": 160
  },
  {
    "name": "vivo Y53s",
    "general": 128,
    "reddot": 96,
    "scope2x": 101,
    "scope4x": 144,
    "sniper": 154,
    "freelook": 142
  },
  {
    "name": "vivo Y33s",
    "general": 127,
    "reddot": 156,
    "scope2x": 129,
    "scope4x": 124,
    "sniper": 133,
    "freelook": 131
  },
  {
    "name": "vivo Y20",
    "general": 107,
    "reddot": 148,
    "scope2x": 117,
    "scope4x": 106,
    "sniper": 102,
    "freelook": 150
  },
  {
    "name": "vivo Y15s",
    "general": 153,
    "reddot": 133,
    "scope2x": 131,
    "scope4x": 155,
    "sniper": 115,
    "freelook": 99
  },
  {
    "name": "vivo Y12",
    "general": 155,
    "reddot": 116,
    "scope2x": 92,
    "scope4x": 103,
    "sniper": 98,
    "freelook": 125
  },
  {
    "name": "vivo X70 Pro",
    "general": 87,
    "reddot": 99,
    "scope2x": 157,
    "scope4x": 106,
    "sniper": 136,
    "freelook": 149
  },
  {
    "name": "vivo X60 Pro",
    "general": 88,
    "reddot": 146,
    "scope2x": 141,
    "scope4x": 111,
    "sniper": 115,
    "freelook": 106
  },
  {
    "name": "Nokia G300",
    "general": 154,
    "reddot": 81,
    "scope2x": 132,
    "scope4x": 156,
    "sniper": 135,
    "freelook": 151
  },
  {
    "name": "Nokia G20",
    "general": 109,
    "reddot": 139,
    "scope2x": 152,
    "scope4x": 101,
    "sniper": 86,
    "freelook": 125
  },
  {
    "name": "Nokia G100",
    "general": 132,
    "reddot": 141,
    "scope2x": 118,
    "scope4x": 98,
    "sniper": 138,
    "freelook": 147
  },
  {
    "name": "Nokia C30",
    "general": 120,
    "reddot": 83,
    "scope2x": 137,
    "scope4x": 130,
    "sniper": 125,
    "freelook": 80
  },
  {
    "name": "Nokia C20",
    "general": 122,
    "reddot": 122,
    "scope2x": 136,
    "scope4x": 90,
    "sniper": 149,
    "freelook": 103
  },
  {
    "name": "5.4",
    "general": 101,
    "reddot": 160,
    "scope2x": 90,
    "scope4x": 148,
    "sniper": 102,
    "freelook": 107
  },
  {
    "name": "5.3",
    "general": 108,
    "reddot": 85,
    "scope2x": 96,
    "scope4x": 121,
    "sniper": 149,
    "freelook": 130
  },
  {
    "name": "3.4",
    "general": 145,
    "reddot": 146,
    "scope2x": 140,
    "scope4x": 84,
    "sniper": 121,
    "freelook": 80
  },
  {
    "name": "2.4",
    "general": 141,
    "reddot": 116,
    "scope2x": 146,
    "scope4x": 83,
    "sniper": 147,
    "freelook": 89
  },
  {
    "name": "1.4",
    "general": 117,
    "reddot": 128,
    "scope2x": 135,
    "scope4x": 84,
    "sniper": 129,
    "freelook": 131
  },
  {
    "name": "itel P40 Pro",
    "general": 103,
    "reddot": 103,
    "scope2x": 87,
    "scope4x": 111,
    "sniper": 128,
    "freelook": 85
  },
  {
    "name": "itel P40 Lite",
    "general": 147,
    "reddot": 145,
    "scope2x": 107,
    "scope4x": 156,
    "sniper": 130,
    "freelook": 152
  },
  {
    "name": "itel P30 Pro",
    "general": 110,
    "reddot": 100,
    "scope2x": 142,
    "scope4x": 127,
    "sniper": 130,
    "freelook": 104
  },
  {
    "name": "itel P30 Lite",
    "general": 155,
    "reddot": 93,
    "scope2x": 150,
    "scope4x": 132,
    "sniper": 128,
    "freelook": 140
  },
  {
    "name": "Mate 40 Pro",
    "general": 84,
    "reddot": 94,
    "scope2x": 141,
    "scope4x": 81,
    "sniper": 149,
    "freelook": 83
  },
  {
    "name": "Mate 30 Pro",
    "general": 122,
    "reddot": 137,
    "scope2x": 94,
    "scope4x": 134,
    "sniper": 128,
    "freelook": 82
  },
  {
    "name": "Nova 9",
    "general": 130,
    "reddot": 83,
    "scope2x": 143,
    "scope4x": 158,
    "sniper": 131,
    "freelook": 133
  },
  {
    "name": "Nova 8i",
    "general": 152,
    "reddot": 121,
    "scope2x": 144,
    "scope4x": 90,
    "sniper": 130,
    "freelook": 157
  },
  {
    "name": "vivo Y8p",
    "general": 150,
    "reddot": 109,
    "scope2x": 82,
    "scope4x": 146,
    "sniper": 106,
    "freelook": 111
  },
  {
    "name": "vivo Y5p",
    "general": 105,
    "reddot": 158,
    "scope2x": 152,
    "scope4x": 123,
    "sniper": 130,
    "freelook": 104
  },
  {
    "name": "10 Pro+",
    "general": 88,
    "reddot": 105,
    "scope2x": 133,
    "scope4x": 115,
    "sniper": 116,
    "freelook": 137
  },
  {
    "name": "10 Pro",
    "general": 159,
    "reddot": 110,
    "scope2x": 135,
    "scope4x": 150,
    "sniper": 127,
    "freelook": 158
  },
  {
    "name": "9 Pro+",
    "general": 127,
    "reddot": 92,
    "scope2x": 119,
    "scope4x": 126,
    "sniper": 152,
    "freelook": 94
  },
  {
    "name": "9i",
    "general": 123,
    "reddot": 105,
    "scope2x": 155,
    "scope4x": 131,
    "sniper": 151,
    "freelook": 89
  },
  {
    "name": "8 Pro",
    "general": 138,
    "reddot": 82,
    "scope2x": 87,
    "scope4x": 105,
    "sniper": 142,
    "freelook": 144
  },
  {
    "name": "8i",
    "general": 155,
    "reddot": 90,
    "scope2x": 124,
    "scope4x": 158,
    "sniper": 116,
    "freelook": 123
  },
  {
    "name": "Nokia C35",
    "general": 96,
    "reddot": 139,
    "scope2x": 152,
    "scope4x": 92,
    "sniper": 140,
    "freelook": 153
  },
  {
    "name": "Nokia C33",
    "general": 157,
    "reddot": 88,
    "scope2x": 87,
    "scope4x": 149,
    "sniper": 99,
    "freelook": 97
  },
  {
    "name": "Nokia C31",
    "general": 97,
    "reddot": 156,
    "scope2x": 97,
    "scope4x": 121,
    "sniper": 148,
    "freelook": 132
  },
  {
    "name": "Narzo 50",
    "general": 86,
    "reddot": 86,
    "scope2x": 82,
    "scope4x": 85,
    "sniper": 145,
    "freelook": 160
  },
  {
    "name": "itel S24",
    "general": 151,
    "reddot": 139,
    "scope2x": 103,
    "scope4x": 139,
    "sniper": 154,
    "freelook": 148
  },
  {
    "name": "itel S23+",
    "general": 153,
    "reddot": 130,
    "scope2x": 141,
    "scope4x": 133,
    "sniper": 125,
    "freelook": 106
  },
  {
    "name": "itel S23",
    "general": 112,
    "reddot": 135,
    "scope2x": 125,
    "scope4x": 158,
    "sniper": 112,
    "freelook": 93
  },
  {
    "name": "itel S18 Pro",
    "general": 83,
    "reddot": 97,
    "scope2x": 129,
    "scope4x": 154,
    "sniper": 103,
    "freelook": 85
  },
  {
    "name": "itel S18",
    "general": 112,
    "reddot": 98,
    "scope2x": 118,
    "scope4x": 129,
    "sniper": 132,
    "freelook": 153
  },
  {
    "name": "itel P65",
    "general": 114,
    "reddot": 140,
    "scope2x": 117,
    "scope4x": 120,
    "sniper": 156,
    "freelook": 122
  },
  {
    "name": "itel P55 Plus",
    "general": 88,
    "reddot": 119,
    "scope2x": 99,
    "scope4x": 89,
    "sniper": 125,
    "freelook": 153
  },
  {
    "name": "itel P55",
    "general": 104,
    "reddot": 150,
    "scope2x": 133,
    "scope4x": 128,
    "sniper": 122,
    "freelook": 90
  },
  {
    "name": "itel P40 Plus",
    "general": 80,
    "reddot": 97,
    "scope2x": 152,
    "scope4x": 95,
    "sniper": 121,
    "freelook": 153
  },
  {
    "name": "itel P40",
    "general": 145,
    "reddot": 97,
    "scope2x": 106,
    "scope4x": 89,
    "sniper": 153,
    "freelook": 122
  },
  {
    "name": "itel P38 Pro",
    "general": 116,
    "reddot": 147,
    "scope2x": 114,
    "scope4x": 121,
    "sniper": 104,
    "freelook": 131
  },
  {
    "name": "itel P38",
    "general": 91,
    "reddot": 146,
    "scope2x": 140,
    "scope4x": 143,
    "sniper": 130,
    "freelook": 137
  },
  {
    "name": "itel P37 Pro",
    "general": 136,
    "reddot": 137,
    "scope2x": 153,
    "scope4x": 114,
    "sniper": 95,
    "freelook": 115
  },
  {
    "name": "itel P37",
    "general": 145,
    "reddot": 128,
    "scope2x": 99,
    "scope4x": 155,
    "sniper": 112,
    "freelook": 131
  },
  {
    "name": "itel P36",
    "general": 117,
    "reddot": 111,
    "scope2x": 94,
    "scope4x": 112,
    "sniper": 140,
    "freelook": 89
  },
  {
    "name": "OPPO A80",
    "general": 154,
    "reddot": 90,
    "scope2x": 102,
    "scope4x": 107,
    "sniper": 133,
    "freelook": 112
  },
  {
    "name": "OPPO A70",
    "general": 84,
    "reddot": 95,
    "scope2x": 154,
    "scope4x": 104,
    "sniper": 97,
    "freelook": 81
  },
  {
    "name": "OPPO A60s",
    "general": 140,
    "reddot": 113,
    "scope2x": 120,
    "scope4x": 116,
    "sniper": 133,
    "freelook": 133
  },
  {
    "name": "OPPO A60",
    "general": 107,
    "reddot": 90,
    "scope2x": 118,
    "scope4x": 91,
    "sniper": 107,
    "freelook": 154
  },
  {
    "name": "OPPO A58 Pro",
    "general": 129,
    "reddot": 123,
    "scope2x": 137,
    "scope4x": 91,
    "sniper": 134,
    "freelook": 154
  },
  {
    "name": "TECNO Spark 8 Pro",
    "general": 88,
    "reddot": 129,
    "scope2x": 113,
    "scope4x": 156,
    "sniper": 119,
    "freelook": 113
  },
  {
    "name": "TECNO Spark 8",
    "general": 113,
    "reddot": 158,
    "scope2x": 128,
    "scope4x": 121,
    "sniper": 129,
    "freelook": 130
  },
  {
    "name": "TECNO Spark 8C",
    "general": 90,
    "reddot": 85,
    "scope2x": 150,
    "scope4x": 115,
    "sniper": 142,
    "freelook": 150
  },
  {
    "name": "TECNO Spark 9T",
    "general": 92,
    "reddot": 152,
    "scope2x": 104,
    "scope4x": 121,
    "sniper": 113,
    "freelook": 90
  },
  {
    "name": "TECNO Spark 9 Pro",
    "general": 133,
    "reddot": 83,
    "scope2x": 85,
    "scope4x": 153,
    "sniper": 144,
    "freelook": 97
  },
  {
    "name": "TECNO Spark 10C",
    "general": 117,
    "reddot": 95,
    "scope2x": 85,
    "scope4x": 94,
    "sniper": 117,
    "freelook": 114
  },
  {
    "name": "TECNO Spark 10 5G",
    "general": 106,
    "reddot": 149,
    "scope2x": 130,
    "scope4x": 137,
    "sniper": 101,
    "freelook": 123
  },
  {
    "name": "TECNO Spark 20C",
    "general": 109,
    "reddot": 142,
    "scope2x": 135,
    "scope4x": 119,
    "sniper": 140,
    "freelook": 102
  },
  {
    "name": "TECNO Spark Go Plus",
    "general": 135,
    "reddot": 101,
    "scope2x": 134,
    "scope4x": 103,
    "sniper": 98,
    "freelook": 111
  },
  {
    "name": "TECNO Camon 11",
    "general": 116,
    "reddot": 121,
    "scope2x": 160,
    "scope4x": 142,
    "sniper": 103,
    "freelook": 134
  },
  {
    "name": "TECNO Camon 11 Pro",
    "general": 93,
    "reddot": 87,
    "scope2x": 154,
    "scope4x": 157,
    "sniper": 119,
    "freelook": 109
  },
  {
    "name": "TECNO Camon 15 Premier",
    "general": 136,
    "reddot": 116,
    "scope2x": 97,
    "scope4x": 150,
    "sniper": 127,
    "freelook": 86
  },
  {
    "name": "TECNO Camon 17P",
    "general": 102,
    "reddot": 137,
    "scope2x": 147,
    "scope4x": 99,
    "sniper": 118,
    "freelook": 110
  },
  {
    "name": "TECNO Camon 17 Pro",
    "general": 100,
    "reddot": 136,
    "scope2x": 95,
    "scope4x": 134,
    "sniper": 101,
    "freelook": 145
  },
  {
    "name": "TECNO Camon 18P",
    "general": 144,
    "reddot": 108,
    "scope2x": 107,
    "scope4x": 89,
    "sniper": 91,
    "freelook": 136
  },
  {
    "name": "TECNO Camon 18 Premier",
    "general": 103,
    "reddot": 155,
    "scope2x": 85,
    "scope4x": 120,
    "sniper": 134,
    "freelook": 127
  },
  {
    "name": "TECNO Camon 19 Neo",
    "general": 152,
    "reddot": 144,
    "scope2x": 127,
    "scope4x": 123,
    "sniper": 138,
    "freelook": 102
  },
  {
    "name": "TECNO Camon 19 Pro 5G",
    "general": 135,
    "reddot": 123,
    "scope2x": 102,
    "scope4x": 87,
    "sniper": 95,
    "freelook": 140
  },
  {
    "name": "TECNO Camon 20 Pro 5G",
    "general": 119,
    "reddot": 105,
    "scope2x": 96,
    "scope4x": 89,
    "sniper": 121,
    "freelook": 91
  },
  {
    "name": "TECNO Camon 30 Premier",
    "general": 144,
    "reddot": 142,
    "scope2x": 156,
    "scope4x": 110,
    "sniper": 81,
    "freelook": 148
  },
  {
    "name": "Infinix Hot 6",
    "general": 156,
    "reddot": 148,
    "scope2x": 123,
    "scope4x": 86,
    "sniper": 113,
    "freelook": 133
  },
  {
    "name": "Infinix Hot 6 Pro",
    "general": 127,
    "reddot": 128,
    "scope2x": 144,
    "scope4x": 104,
    "sniper": 130,
    "freelook": 117
  },
  {
    "name": "Infinix Hot 5",
    "general": 90,
    "reddot": 84,
    "scope2x": 151,
    "scope4x": 94,
    "sniper": 89,
    "freelook": 144
  },
  {
    "name": "Infinix Hot 5 Lite",
    "general": 125,
    "reddot": 131,
    "scope2x": 122,
    "scope4x": 133,
    "sniper": 105,
    "freelook": 134
  },
  {
    "name": "Infinix Hot 4 Pro",
    "general": 149,
    "reddot": 112,
    "scope2x": 131,
    "scope4x": 98,
    "sniper": 108,
    "freelook": 87
  },
  {
    "name": "Infinix Hot 4",
    "general": 102,
    "reddot": 147,
    "scope2x": 100,
    "scope4x": 148,
    "sniper": 84,
    "freelook": 158
  },
  {
    "name": "Infinix Hot 3 LTE",
    "general": 80,
    "reddot": 150,
    "scope2x": 127,
    "scope4x": 148,
    "sniper": 95,
    "freelook": 144
  },
  {
    "name": "Infinix Hot 2",
    "general": 131,
    "reddot": 151,
    "scope2x": 154,
    "scope4x": 155,
    "sniper": 135,
    "freelook": 97
  },
  {
    "name": "Infinix Hot 10 Play",
    "general": 83,
    "reddot": 159,
    "scope2x": 135,
    "scope4x": 101,
    "sniper": 144,
    "freelook": 146
  },
  {
    "name": "Infinix Hot 11 Play",
    "general": 81,
    "reddot": 89,
    "scope2x": 108,
    "scope4x": 95,
    "sniper": 84,
    "freelook": 123
  },
  {
    "name": "Infinix Hot 12 Play",
    "general": 118,
    "reddot": 152,
    "scope2x": 80,
    "scope4x": 82,
    "sniper": 151,
    "freelook": 130
  },
  {
    "name": "Infinix Hot 20 Play",
    "general": 94,
    "reddot": 136,
    "scope2x": 133,
    "scope4x": 121,
    "sniper": 111,
    "freelook": 114
  },
  {
    "name": "Infinix Hot 30 Play",
    "general": 127,
    "reddot": 134,
    "scope2x": 125,
    "scope4x": 130,
    "sniper": 158,
    "freelook": 146
  },
  {
    "name": "Infinix Hot 40i",
    "general": 131,
    "reddot": 98,
    "scope2x": 159,
    "scope4x": 99,
    "sniper": 112,
    "freelook": 85
  },
  {
    "name": "Infinix Hot 50i",
    "general": 147,
    "reddot": 107,
    "scope2x": 144,
    "scope4x": 102,
    "sniper": 159,
    "freelook": 101
  },
  {
    "name": "Infinix Note 5 Stylus",
    "general": 99,
    "reddot": 135,
    "scope2x": 82,
    "scope4x": 89,
    "sniper": 149,
    "freelook": 85
  },
  {
    "name": "Infinix Note 5",
    "general": 121,
    "reddot": 140,
    "scope2x": 114,
    "scope4x": 156,
    "sniper": 122,
    "freelook": 90
  },
  {
    "name": "Infinix Note 4 Pro",
    "general": 110,
    "reddot": 112,
    "scope2x": 149,
    "scope4x": 151,
    "sniper": 110,
    "freelook": 107
  },
  {
    "name": "Infinix Note 3",
    "general": 147,
    "reddot": 95,
    "scope2x": 107,
    "scope4x": 144,
    "sniper": 94,
    "freelook": 112
  },
  {
    "name": "Infinix Note 2",
    "general": 155,
    "reddot": 136,
    "scope2x": 141,
    "scope4x": 143,
    "sniper": 83,
    "freelook": 159
  },
  {
    "name": "Infinix Note 12 VIP",
    "general": 134,
    "reddot": 117,
    "scope2x": 92,
    "scope4x": 82,
    "sniper": 83,
    "freelook": 122
  },
  {
    "name": "Infinix Note 30 VIP",
    "general": 157,
    "reddot": 152,
    "scope2x": 103,
    "scope4x": 138,
    "sniper": 127,
    "freelook": 152
  },
  {
    "name": "Infinix Note 40 Pro+",
    "general": 122,
    "reddot": 147,
    "scope2x": 154,
    "scope4x": 156,
    "sniper": 111,
    "freelook": 98
  },
  {
    "name": "Samsung Galaxy S20 Ultra",
    "general": 91,
    "reddot": 121,
    "scope2x": 159,
    "scope4x": 134,
    "sniper": 101,
    "freelook": 116
  },
  {
    "name": "itel S20+",
    "general": 104,
    "reddot": 88,
    "scope2x": 105,
    "scope4x": 92,
    "sniper": 138,
    "freelook": 156
  },
  {
    "name": "itel S20",
    "general": 126,
    "reddot": 92,
    "scope2x": 85,
    "scope4x": 80,
    "sniper": 107,
    "freelook": 103
  },
  {
    "name": "itel S10+",
    "general": 158,
    "reddot": 110,
    "scope2x": 159,
    "scope4x": 87,
    "sniper": 156,
    "freelook": 137
  },
  {
    "name": "itel S10",
    "general": 91,
    "reddot": 152,
    "scope2x": 81,
    "scope4x": 115,
    "sniper": 149,
    "freelook": 121
  },
  {
    "name": "Infinix Note 10+",
    "general": 85,
    "reddot": 148,
    "scope2x": 92,
    "scope4x": 123,
    "sniper": 106,
    "freelook": 108
  },
  {
    "name": "Infinix Note 10",
    "general": 155,
    "reddot": 147,
    "scope2x": 128,
    "scope4x": 106,
    "sniper": 94,
    "freelook": 126
  },
  {
    "name": "OPPO A50",
    "general": 118,
    "reddot": 86,
    "scope2x": 126,
    "scope4x": 141,
    "sniper": 83,
    "freelook": 93
  },
  {
    "name": "OPPO A30",
    "general": 122,
    "reddot": 143,
    "scope2x": 104,
    "scope4x": 102,
    "sniper": 87,
    "freelook": 159
  },
  {
    "name": "OPPO A20",
    "general": 112,
    "reddot": 120,
    "scope2x": 107,
    "scope4x": 147,
    "sniper": 94,
    "freelook": 109
  },
  {
    "name": "OPPO A10",
    "general": 138,
    "reddot": 100,
    "scope2x": 125,
    "scope4x": 122,
    "sniper": 117,
    "freelook": 117
  },
  {
    "name": "M31",
    "general": 94,
    "reddot": 119,
    "scope2x": 125,
    "scope4x": 141,
    "sniper": 157,
    "freelook": 82
  },
  {
    "name": "M21",
    "general": 103,
    "reddot": 160,
    "scope2x": 147,
    "scope4x": 110,
    "sniper": 152,
    "freelook": 87
  },
  {
    "name": "M11",
    "general": 138,
    "reddot": 154,
    "scope2x": 111,
    "scope4x": 109,
    "sniper": 130,
    "freelook": 135
  },
  {
    "name": "J8",
    "general": 93,
    "reddot": 138,
    "scope2x": 153,
    "scope4x": 94,
    "sniper": 149,
    "freelook": 140
  },
  {
    "name": "Mi 9",
    "general": 146,
    "reddot": 95,
    "scope2x": 90,
    "scope4x": 122,
    "sniper": 138,
    "freelook": 148
  },
  {
    "name": "Mi 9T",
    "general": 91,
    "reddot": 100,
    "scope2x": 95,
    "scope4x": 87,
    "sniper": 116,
    "freelook": 117
  },
  {
    "name": "Mi 9 Lite",
    "general": 151,
    "reddot": 115,
    "scope2x": 107,
    "scope4x": 113,
    "sniper": 118,
    "freelook": 88
  },
  {
    "name": "Mi 10",
    "general": 131,
    "reddot": 99,
    "scope2x": 121,
    "scope4x": 90,
    "sniper": 82,
    "freelook": 135
  },
  {
    "name": "Mi 10 Pro",
    "general": 126,
    "reddot": 126,
    "scope2x": 118,
    "scope4x": 122,
    "sniper": 81,
    "freelook": 143
  },
  {
    "name": "Mi 10 Ultra",
    "general": 118,
    "reddot": 93,
    "scope2x": 128,
    "scope4x": 108,
    "sniper": 115,
    "freelook": 109
  },
  {
    "name": "Mi 11 Lite",
    "general": 83,
    "reddot": 103,
    "scope2x": 84,
    "scope4x": 132,
    "sniper": 80,
    "freelook": 91
  },
  {
    "name": "Mi 11i",
    "general": 144,
    "reddot": 100,
    "scope2x": 141,
    "scope4x": 128,
    "sniper": 83,
    "freelook": 142
  },
  {
    "name": "Mi Mix 3",
    "general": 99,
    "reddot": 133,
    "scope2x": 143,
    "scope4x": 128,
    "sniper": 137,
    "freelook": 122
  },
  {
    "name": "Mi Mix Fold",
    "general": 128,
    "reddot": 144,
    "scope2x": 141,
    "scope4x": 122,
    "sniper": 120,
    "freelook": 105
  },
  {
    "name": "OPPO A17",
    "general": 105,
    "reddot": 101,
    "scope2x": 132,
    "scope4x": 93,
    "sniper": 80,
    "freelook": 130
  },
  {
    "name": "OPPO A16",
    "general": 84,
    "reddot": 132,
    "scope2x": 124,
    "scope4x": 122,
    "sniper": 120,
    "freelook": 110
  },
  {
    "name": "OPPO A15",
    "general": 147,
    "reddot": 131,
    "scope2x": 136,
    "scope4x": 104,
    "sniper": 135,
    "freelook": 133
  },
  {
    "name": "OPPO A12",
    "general": 141,
    "reddot": 119,
    "scope2x": 138,
    "scope4x": 88,
    "sniper": 138,
    "freelook": 145
  },
  {
    "name": "OPPO A11K",
    "general": 133,
    "reddot": 92,
    "scope2x": 93,
    "scope4x": 146,
    "sniper": 99,
    "freelook": 106
  },
  {
    "name": "F17",
    "general": 142,
    "reddot": 155,
    "scope2x": 143,
    "scope4x": 108,
    "sniper": 96,
    "freelook": 128
  },
  {
    "name": "F15",
    "general": 94,
    "reddot": 147,
    "scope2x": 131,
    "scope4x": 101,
    "sniper": 128,
    "freelook": 124
  },
  {
    "name": "F11 Pro",
    "general": 135,
    "reddot": 103,
    "scope2x": 96,
    "scope4x": 159,
    "sniper": 137,
    "freelook": 126
  },
  {
    "name": "OPPO Reno Z",
    "general": 116,
    "reddot": 109,
    "scope2x": 138,
    "scope4x": 132,
    "sniper": 117,
    "freelook": 104
  },
  {
    "name": "OPPO Reno 2F",
    "general": 97,
    "reddot": 94,
    "scope2x": 107,
    "scope4x": 148,
    "sniper": 100,
    "freelook": 87
  },
  {
    "name": "TECNO Spark 3",
    "general": 135,
    "reddot": 133,
    "scope2x": 155,
    "scope4x": 83,
    "sniper": 115,
    "freelook": 124
  },
  {
    "name": "TECNO Spark 2",
    "general": 93,
    "reddot": 84,
    "scope2x": 92,
    "scope4x": 107,
    "sniper": 157,
    "freelook": 125
  },
  {
    "name": "TECNO Spark Go",
    "general": 142,
    "reddot": 132,
    "scope2x": 146,
    "scope4x": 158,
    "sniper": 125,
    "freelook": 99
  },
  {
    "name": "TECNO Camon C8",
    "general": 120,
    "reddot": 82,
    "scope2x": 119,
    "scope4x": 112,
    "sniper": 150,
    "freelook": 94
  },
  {
    "name": "TECNO Camon C9",
    "general": 156,
    "reddot": 112,
    "scope2x": 149,
    "scope4x": 126,
    "sniper": 128,
    "freelook": 140
  },
  {
    "name": "TECNO Camon X",
    "general": 82,
    "reddot": 120,
    "scope2x": 117,
    "scope4x": 132,
    "sniper": 123,
    "freelook": 101
  },
  {
    "name": "TECNO Camon 12",
    "general": 129,
    "reddot": 82,
    "scope2x": 157,
    "scope4x": 125,
    "sniper": 132,
    "freelook": 114
  },
  {
    "name": "Pouvoir 3",
    "general": 125,
    "reddot": 115,
    "scope2x": 121,
    "scope4x": 93,
    "sniper": 103,
    "freelook": 97
  },
  {
    "name": "Pouvoir 2",
    "general": 128,
    "reddot": 86,
    "scope2x": 120,
    "scope4x": 142,
    "sniper": 149,
    "freelook": 152
  },
  {
    "name": "TECNO Spark Youth",
    "general": 129,
    "reddot": 106,
    "scope2x": 129,
    "scope4x": 106,
    "sniper": 139,
    "freelook": 129
  },
  {
    "name": "Infinix Hot 2",
    "general": 152,
    "reddot": 108,
    "scope2x": 149,
    "scope4x": 123,
    "sniper": 82,
    "freelook": 116
  },
  {
    "name": "Infinix Hot 3",
    "general": 102,
    "reddot": 93,
    "scope2x": 93,
    "scope4x": 132,
    "sniper": 133,
    "freelook": 123
  },
  {
    "name": "Infinix Hot 4",
    "general": 124,
    "reddot": 135,
    "scope2x": 97,
    "scope4x": 126,
    "sniper": 158,
    "freelook": 131
  },
  {
    "name": "Infinix Hot 5",
    "general": 128,
    "reddot": 133,
    "scope2x": 152,
    "scope4x": 95,
    "sniper": 86,
    "freelook": 155
  },
  {
    "name": "Infinix Hot 6",
    "general": 156,
    "reddot": 157,
    "scope2x": 91,
    "scope4x": 94,
    "sniper": 80,
    "freelook": 144
  },
  {
    "name": "Infinix Note 2",
    "general": 102,
    "reddot": 81,
    "scope2x": 140,
    "scope4x": 136,
    "sniper": 85,
    "freelook": 118
  },
  {
    "name": "Infinix Note 3",
    "general": 122,
    "reddot": 128,
    "scope2x": 136,
    "scope4x": 120,
    "sniper": 88,
    "freelook": 119
  },
  {
    "name": "Infinix Zero 4",
    "general": 137,
    "reddot": 97,
    "scope2x": 136,
    "scope4x": 124,
    "sniper": 115,
    "freelook": 136
  },
  {
    "name": "Infinix Smart 2",
    "general": 101,
    "reddot": 146,
    "scope2x": 117,
    "scope4x": 148,
    "sniper": 99,
    "freelook": 159
  },
  {
    "name": "Infinix Smart 3",
    "general": 111,
    "reddot": 153,
    "scope2x": 129,
    "scope4x": 107,
    "sniper": 138,
    "freelook": 114
  },
  {
    "name": "Samsung Galaxy J2",
    "general": 140,
    "reddot": 122,
    "scope2x": 156,
    "scope4x": 84,
    "sniper": 129,
    "freelook": 81
  },
  {
    "name": "Samsung Galaxy J5",
    "general": 142,
    "reddot": 118,
    "scope2x": 108,
    "scope4x": 100,
    "sniper": 141,
    "freelook": 84
  },
  {
    "name": "Samsung Galaxy J7",
    "general": 122,
    "reddot": 145,
    "scope2x": 136,
    "scope4x": 136,
    "sniper": 80,
    "freelook": 92
  },
  {
    "name": "Samsung Galaxy S6",
    "general": 108,
    "reddot": 133,
    "scope2x": 110,
    "scope4x": 147,
    "sniper": 148,
    "freelook": 85
  },
  {
    "name": "Samsung Galaxy S7",
    "general": 134,
    "reddot": 152,
    "scope2x": 86,
    "scope4x": 150,
    "sniper": 143,
    "freelook": 160
  },
  {
    "name": "Samsung Galaxy A01",
    "general": 143,
    "reddot": 93,
    "scope2x": 116,
    "scope4x": 138,
    "sniper": 112,
    "freelook": 134
  },
  {
    "name": "Samsung Galaxy A10",
    "general": 158,
    "reddot": 131,
    "scope2x": 126,
    "scope4x": 138,
    "sniper": 158,
    "freelook": 145
  },
  {
    "name": "Samsung Galaxy A20",
    "general": 91,
    "reddot": 103,
    "scope2x": 91,
    "scope4x": 140,
    "sniper": 95,
    "freelook": 81
  },
  {
    "name": "Redmi 6A",
    "general": 126,
    "reddot": 82,
    "scope2x": 119,
    "scope4x": 105,
    "sniper": 158,
    "freelook": 123
  },
  {
    "name": "Redmi 5A",
    "general": 157,
    "reddot": 95,
    "scope2x": 120,
    "scope4x": 142,
    "sniper": 136,
    "freelook": 99
  },
  {
    "name": "Redmi 4A",
    "general": 122,
    "reddot": 144,
    "scope2x": 128,
    "scope4x": 128,
    "sniper": 157,
    "freelook": 145
  },
  {
    "name": "Redmi 3S",
    "general": 110,
    "reddot": 145,
    "scope2x": 136,
    "scope4x": 107,
    "sniper": 104,
    "freelook": 149
  },
  {
    "name": "Redmi 7A",
    "general": 110,
    "reddot": 140,
    "scope2x": 90,
    "scope4x": 138,
    "sniper": 139,
    "freelook": 153
  },
  {
    "name": "Redmi 8A",
    "general": 136,
    "reddot": 92,
    "scope2x": 119,
    "scope4x": 127,
    "sniper": 117,
    "freelook": 116
  },
  {
    "name": "Redmi 9A",
    "general": 85,
    "reddot": 154,
    "scope2x": 147,
    "scope4x": 82,
    "sniper": 128,
    "freelook": 107
  },
  {
    "name": "Redmi A1",
    "general": 103,
    "reddot": 125,
    "scope2x": 145,
    "scope4x": 139,
    "sniper": 83,
    "freelook": 113
  },
  {
    "name": "OPPO A1k",
    "general": 143,
    "reddot": 137,
    "scope2x": 140,
    "scope4x": 146,
    "sniper": 143,
    "freelook": 134
  },
  {
    "name": "OPPO A3s",
    "general": 89,
    "reddot": 81,
    "scope2x": 142,
    "scope4x": 80,
    "sniper": 96,
    "freelook": 85
  },
  {
    "name": "OPPO A5s",
    "general": 149,
    "reddot": 87,
    "scope2x": 154,
    "scope4x": 155,
    "sniper": 157,
    "freelook": 132
  },
  {
    "name": "OPPO A12",
    "general": 137,
    "reddot": 91,
    "scope2x": 95,
    "scope4x": 127,
    "sniper": 119,
    "freelook": 138
  },
  {
    "name": "OPPO A15",
    "general": 131,
    "reddot": 91,
    "scope2x": 137,
    "scope4x": 124,
    "sniper": 99,
    "freelook": 130
  },
  {
    "name": "F1s",
    "general": 99,
    "reddot": 159,
    "scope2x": 135,
    "scope4x": 116,
    "sniper": 117,
    "freelook": 92
  },
  {
    "name": "itel P60 Pro",
    "general": 104,
    "reddot": 155,
    "scope2x": 124,
    "scope4x": 131,
    "sniper": 135,
    "freelook": 97
  },
  {
    "name": "itel P50 Pro",
    "general": 131,
    "reddot": 103,
    "scope2x": 118,
    "scope4x": 84,
    "sniper": 123,
    "freelook": 81
  },
  {
    "name": "itel P40 Pro",
    "general": 128,
    "reddot": 103,
    "scope2x": 124,
    "scope4x": 84,
    "sniper": 91,
    "freelook": 149
  },
  {
    "name": "itel P30 Pro",
    "general": 157,
    "reddot": 129,
    "scope2x": 132,
    "scope4x": 104,
    "sniper": 151,
    "freelook": 127
  },
  {
    "name": "Mate 85 Pro",
    "general": 133,
    "reddot": 125,
    "scope2x": 111,
    "scope4x": 136,
    "sniper": 118,
    "freelook": 157
  },
  {
    "name": "Mate 50 Pro",
    "general": 107,
    "reddot": 85,
    "scope2x": 100,
    "scope4x": 84,
    "sniper": 125,
    "freelook": 145
  },
  {
    "name": "Mate 40 Pro",
    "general": 87,
    "reddot": 92,
    "scope2x": 108,
    "scope4x": 153,
    "sniper": 80,
    "freelook": 143
  },
  {
    "name": "Mate 30 Pro",
    "general": 123,
    "reddot": 125,
    "scope2x": 140,
    "scope4x": 90,
    "sniper": 160,
    "freelook": 142
  },
  {
    "name": "Nova 12",
    "general": 91,
    "reddot": 114,
    "scope2x": 100,
    "scope4x": 92,
    "sniper": 123,
    "freelook": 118
  },
  {
    "name": "Nova 11",
    "general": 130,
    "reddot": 127,
    "scope2x": 126,
    "scope4x": 105,
    "sniper": 107,
    "freelook": 113
  },
  {
    "name": "Nova 10",
    "general": 117,
    "reddot": 118,
    "scope2x": 138,
    "scope4x": 144,
    "sniper": 113,
    "freelook": 104
  },
  {
    "name": "Nova 9",
    "general": 147,
    "reddot": 149,
    "scope2x": 137,
    "scope4x": 139,
    "sniper": 111,
    "freelook": 103
  },
  {
    "name": "Nova 8i",
    "general": 134,
    "reddot": 145,
    "scope2x": 101,
    "scope4x": 92,
    "sniper": 97,
    "freelook": 142
  },
  {
    "name": "Nova 7i",
    "general": 119,
    "reddot": 80,
    "scope2x": 148,
    "scope4x": 99,
    "sniper": 97,
    "freelook": 103
  },
  {
    "name": "Nova 5T",
    "general": 104,
    "reddot": 101,
    "scope2x": 124,
    "scope4x": 99,
    "sniper": 128,
    "freelook": 82
  },
  {
    "name": "vivo Y9 Prime",
    "general": 84,
    "reddot": 89,
    "scope2x": 93,
    "scope4x": 148,
    "sniper": 84,
    "freelook": 124
  },
  {
    "name": "vivo Y7 Prime",
    "general": 128,
    "reddot": 156,
    "scope2x": 132,
    "scope4x": 94,
    "sniper": 154,
    "freelook": 88
  },
  {
    "name": "vivo Y6 Prime",
    "general": 130,
    "reddot": 124,
    "scope2x": 89,
    "scope4x": 142,
    "sniper": 91,
    "freelook": 126
  },
  {
    "name": "vivo Y5 2019",
    "general": 132,
    "reddot": 160,
    "scope2x": 108,
    "scope4x": 106,
    "sniper": 99,
    "freelook": 157
  },
  {
    "name": "vivo Y8p",
    "general": 101,
    "reddot": 89,
    "scope2x": 97,
    "scope4x": 152,
    "sniper": 95,
    "freelook": 90
  },
  {
    "name": "vivo Y7a",
    "general": 89,
    "reddot": 148,
    "scope2x": 160,
    "scope4x": 125,
    "sniper": 160,
    "freelook": 104
  },
  {
    "name": "vivo Y6p",
    "general": 160,
    "reddot": 113,
    "scope2x": 153,
    "scope4x": 140,
    "sniper": 117,
    "freelook": 154
  },
  {
    "name": "Samsung Galaxy S26",
    "general": 153,
    "reddot": 125,
    "scope2x": 145,
    "scope4x": 141,
    "sniper": 135,
    "freelook": 82
  },
  {
    "name": "Samsung Galaxy S26+",
    "general": 154,
    "reddot": 82,
    "scope2x": 96,
    "scope4x": 145,
    "sniper": 81,
    "freelook": 139
  },
  {
    "name": "Samsung Galaxy S26 Ultra",
    "general": 120,
    "reddot": 152,
    "scope2x": 112,
    "scope4x": 133,
    "sniper": 88,
    "freelook": 89
  },
  {
    "name": "Samsung Galaxy A57 5G",
    "general": 124,
    "reddot": 83,
    "scope2x": 131,
    "scope4x": 99,
    "sniper": 105,
    "freelook": 145
  },
  {
    "name": "Xiaomi 17T",
    "general": 80,
    "reddot": 108,
    "scope2x": 140,
    "scope4x": 159,
    "sniper": 116,
    "freelook": 122
  },
  {
    "name": "Redmi Note 15 5G",
    "general": 112,
    "reddot": 147,
    "scope2x": 139,
    "scope4x": 131,
    "sniper": 113,
    "freelook": 142
  },
  {
    "name": "Redmi Note 15 Pro 5G",
    "general": 88,
    "reddot": 135,
    "scope2x": 135,
    "scope4x": 160,
    "sniper": 133,
    "freelook": 157
  },
  {
    "name": "Redmi Turbo 5",
    "general": 120,
    "reddot": 159,
    "scope2x": 121,
    "scope4x": 160,
    "sniper": 123,
    "freelook": 124
  },
  {
    "name": "POCO M8 5G",
    "general": 150,
    "reddot": 127,
    "scope2x": 94,
    "scope4x": 139,
    "sniper": 89,
    "freelook": 150
  },
  {
    "name": "POCO F8 Pro",
    "general": 93,
    "reddot": 144,
    "scope2x": 121,
    "scope4x": 123,
    "sniper": 111,
    "freelook": 87
  },
  {
    "name": "POCO X8 Pro",
    "general": 117,
    "reddot": 115,
    "scope2x": 150,
    "scope4x": 115,
    "sniper": 152,
    "freelook": 142
  },
  {
    "name": "vivo X300",
    "general": 136,
    "reddot": 149,
    "scope2x": 142,
    "scope4x": 136,
    "sniper": 123,
    "freelook": 121
  },
  {
    "name": "vivo X300 Pro",
    "general": 119,
    "reddot": 160,
    "scope2x": 118,
    "scope4x": 130,
    "sniper": 92,
    "freelook": 108
  },
  {
    "name": "vivo X300 Ultra",
    "general": 143,
    "reddot": 80,
    "scope2x": 82,
    "scope4x": 148,
    "sniper": 157,
    "freelook": 131
  },
  {
    "name": "vivo V70",
    "general": 121,
    "reddot": 154,
    "scope2x": 127,
    "scope4x": 159,
    "sniper": 101,
    "freelook": 92
  },
  {
    "name": "vivo V70 Pro",
    "general": 147,
    "reddot": 117,
    "scope2x": 144,
    "scope4x": 113,
    "sniper": 103,
    "freelook": 141
  },
  {
    "name": "iQOO Z11",
    "general": 96,
    "reddot": 148,
    "scope2x": 137,
    "scope4x": 102,
    "sniper": 112,
    "freelook": 159
  },
  {
    "name": "iQOO 15R",
    "general": 90,
    "reddot": 107,
    "scope2x": 81,
    "scope4x": 126,
    "sniper": 110,
    "freelook": 152
  },
  {
    "name": "OPPO Find X9 Ultra",
    "general": 150,
    "reddot": 132,
    "scope2x": 101,
    "scope4x": 90,
    "sniper": 135,
    "freelook": 116
  },
  {
    "name": "OPPO A6c",
    "general": 117,
    "reddot": 95,
    "scope2x": 138,
    "scope4x": 101,
    "sniper": 83,
    "freelook": 158
  },
  {
    "name": "Motorola Edge 72 Pro+",
    "general": 118,
    "reddot": 99,
    "scope2x": 100,
    "scope4x": 99,
    "sniper": 143,
    "freelook": 143
  },
  {
    "name": "Motorola Edge 81",
    "general": 109,
    "reddot": 146,
    "scope2x": 88,
    "scope4x": 153,
    "sniper": 132,
    "freelook": 158
  },
  {
    "name": "Huawei Nova 16",
    "general": 137,
    "reddot": 82,
    "scope2x": 123,
    "scope4x": 124,
    "sniper": 148,
    "freelook": 80
  },
  {
    "name": "Huawei Nova 16 Pro",
    "general": 80,
    "reddot": 90,
    "scope2x": 156,
    "scope4x": 95,
    "sniper": 124,
    "freelook": 128
  },
  {
    "name": "Huawei Nova 16 Ultra",
    "general": 107,
    "reddot": 126,
    "scope2x": 160,
    "scope4x": 135,
    "sniper": 133,
    "freelook": 88
  },
  {
    "name": "Tecno Camon 50",
    "general": 108,
    "reddot": 87,
    "scope2x": 141,
    "scope4x": 93,
    "sniper": 100,
    "freelook": 88
  },
  {
    "name": "Tecno Camon 50 Pro",
    "general": 117,
    "reddot": 127,
    "scope2x": 131,
    "scope4x": 129,
    "sniper": 95,
    "freelook": 105
  },
  {
    "name": "Tecno Spark 40",
    "general": 144,
    "reddot": 87,
    "scope2x": 84,
    "scope4x": 153,
    "sniper": 105,
    "freelook": 89
  },
  {
    "name": "Infinix GT 50 Pro",
    "general": 108,
    "reddot": 89,
    "scope2x": 91,
    "scope4x": 82,
    "sniper": 118,
    "freelook": 110
  },
  {
    "name": "Infinix Note 115 Pro",
    "general": 95,
    "reddot": 127,
    "scope2x": 132,
    "scope4x": 143,
    "sniper": 112,
    "freelook": 114
  },
  {
    "name": "OnePlus 15",
    "general": 102,
    "reddot": 131,
    "scope2x": 100,
    "scope4x": 123,
    "sniper": 92,
    "freelook": 148
  },
  {
    "name": "OnePlus Nord 6",
    "general": 149,
    "reddot": 109,
    "scope2x": 105,
    "scope4x": 85,
    "sniper": 126,
    "freelook": 152
  },
  {
    "name": "OnePlus Nord CE 6",
    "general": 115,
    "reddot": 142,
    "scope2x": 84,
    "scope4x": 113,
    "sniper": 113,
    "freelook": 106
  },
  {
    "name": "Nothing Phone (4a)",
    "general": 140,
    "reddot": 112,
    "scope2x": 124,
    "scope4x": 155,
    "sniper": 116,
    "freelook": 100
  },
  {
    "name": "HMD Luma",
    "general": 113,
    "reddot": 131,
    "scope2x": 101,
    "scope4x": 83,
    "sniper": 95,
    "freelook": 121
  },
  {
    "name": "REDMAGIC 11 Pro",
    "general": 93,
    "reddot": 81,
    "scope2x": 101,
    "scope4x": 109,
    "sniper": 156,
    "freelook": 85
  },
  {
    "name": "ASUS ROG Phone 10",
    "general": 132,
    "reddot": 86,
    "scope2x": 141,
    "scope4x": 102,
    "sniper": 108,
    "freelook": 104
  },
  {
    "name": "Lava Bold N2 5G",
    "general": 127,
    "reddot": 146,
    "scope2x": 157,
    "scope4x": 141,
    "sniper": 84,
    "freelook": 90
  },
  {
    "name": "Samsung Galaxy A27",
    "general": 106,
    "reddot": 118,
    "scope2x": 83,
    "scope4x": 112,
    "sniper": 119,
    "freelook": 149
  },
  {
    "name": "Samsung Galaxy M47",
    "general": 125,
    "reddot": 101,
    "scope2x": 102,
    "scope4x": 95,
    "sniper": 96,
    "freelook": 102
  },
  {
    "name": "OnePlus 15s",
    "general": 117,
    "reddot": 109,
    "scope2x": 92,
    "scope4x": 87,
    "sniper": 140,
    "freelook": 152
  },
  {
    "name": "Google Pixel 10a",
    "general": 100,
    "reddot": 120,
    "scope2x": 86,
    "scope4x": 154,
    "sniper": 92,
    "freelook": 111
  },
  {
    "name": "Google Pixel 10",
    "general": 92,
    "reddot": 145,
    "scope2x": 129,
    "scope4x": 92,
    "sniper": 119,
    "freelook": 95
  },
  {
    "name": "Google Pixel 10 Pro",
    "general": 128,
    "reddot": 129,
    "scope2x": 84,
    "scope4x": 148,
    "sniper": 113,
    "freelook": 133
  },
  {
    "name": "Google Pixel 10 Pro XL",
    "general": 109,
    "reddot": 81,
    "scope2x": 135,
    "scope4x": 84,
    "sniper": 89,
    "freelook": 147
  },
  {
    "name": "Honor Magic V6",
    "general": 93,
    "reddot": 142,
    "scope2x": 98,
    "scope4x": 138,
    "sniper": 127,
    "freelook": 96
  },
  {
    "name": "Honor X70",
    "general": 157,
    "reddot": 84,
    "scope2x": 121,
    "scope4x": 102,
    "sniper": 156,
    "freelook": 158
  },
  {
    "name": "Honor 500 Pro",
    "general": 142,
    "reddot": 135,
    "scope2x": 104,
    "scope4x": 145,
    "sniper": 89,
    "freelook": 117
  },
  {
    "name": "OnePlus Open",
    "general": 92,
    "reddot": 160,
    "scope2x": 115,
    "scope4x": 82,
    "sniper": 104,
    "freelook": 117
  },
  {
    "name": "Nothing Phone (3a)",
    "general": 115,
    "reddot": 108,
    "scope2x": 132,
    "scope4x": 83,
    "sniper": 115,
    "freelook": 117
  },
  {
    "name": "Nothing Phone (3a) Pro",
    "general": 119,
    "reddot": 127,
    "scope2x": 88,
    "scope4x": 94,
    "sniper": 90,
    "freelook": 86
  },
  {
    "name": "Honor Magic7 Pro",
    "general": 96,
    "reddot": 150,
    "scope2x": 127,
    "scope4x": 133,
    "sniper": 120,
    "freelook": 132
  },
  {
    "name": "Honor 400 Pro",
    "general": 145,
    "reddot": 120,
    "scope2x": 107,
    "scope4x": 110,
    "sniper": 123,
    "freelook": 109
  },
  {
    "name": "Honor X9c",
    "general": 114,
    "reddot": 143,
    "scope2x": 153,
    "scope4x": 108,
    "sniper": 139,
    "freelook": 159
  },
  {
    "name": "Realme GT 7 Pro",
    "general": 111,
    "reddot": 153,
    "scope2x": 98,
    "scope4x": 123,
    "sniper": 111,
    "freelook": 133
  },
  {
    "name": "Realme GT 7",
    "general": 134,
    "reddot": 102,
    "scope2x": 85,
    "scope4x": 85,
    "sniper": 131,
    "freelook": 108
  },
  {
    "name": "Realme 14 Pro+",
    "general": 122,
    "reddot": 119,
    "scope2x": 123,
    "scope4x": 122,
    "sniper": 127,
    "freelook": 87
  },
  {
    "name": "Realme 14 Pro",
    "general": 97,
    "reddot": 89,
    "scope2x": 151,
    "scope4x": 119,
    "sniper": 104,
    "freelook": 135
  },
  {
    "name": "Tecno Phantom V Fold2",
    "general": 156,
    "reddot": 116,
    "scope2x": 91,
    "scope4x": 153,
    "sniper": 100,
    "freelook": 96
  },
  {
    "name": "Tecno Phantom V Flip2",
    "general": 97,
    "reddot": 154,
    "scope2x": 140,
    "scope4x": 117,
    "sniper": 148,
    "freelook": 120
  },
  {
    "name": "Tecno Pova 7 Pro",
    "general": 102,
    "reddot": 110,
    "scope2x": 99,
    "scope4x": 90,
    "sniper": 158,
    "freelook": 131
  },
  {
    "name": "Infinix Zero 40 5G",
    "general": 105,
    "reddot": 110,
    "scope2x": 148,
    "scope4x": 140,
    "sniper": 118,
    "freelook": 93
  },
  {
    "name": "Infinix Zero Flip",
    "general": 94,
    "reddot": 129,
    "scope2x": 135,
    "scope4x": 138,
    "sniper": 82,
    "freelook": 149
  },
  {
    "name": "Infinix Note 50 Pro+",
    "general": 91,
    "reddot": 84,
    "scope2x": 96,
    "scope4x": 81,
    "sniper": 137,
    "freelook": 100
  },
  {
    "name": "Google Pixel 9a",
    "general": 138,
    "reddot": 111,
    "scope2x": 81,
    "scope4x": 152,
    "sniper": 87,
    "freelook": 118
  },
  {
    "name": "ASUS Zenfone 12 Ultra",
    "general": 109,
    "reddot": 110,
    "scope2x": 132,
    "scope4x": 119,
    "sniper": 153,
    "freelook": 80
  },
  {
    "name": "Realme Narzo 115 Pro",
    "general": 111,
    "reddot": 142,
    "scope2x": 121,
    "scope4x": 140,
    "sniper": 123,
    "freelook": 140
  },
  {
    "name": "Realme Narzo 80x",
    "general": 83,
    "reddot": 118,
    "scope2x": 136,
    "scope4x": 143,
    "sniper": 93,
    "freelook": 154
  },
  {
    "name": "Realme P3 Pro",
    "general": 121,
    "reddot": 103,
    "scope2x": 151,
    "scope4x": 151,
    "sniper": 104,
    "freelook": 143
  },
  {
    "name": "Realme P3",
    "general": 116,
    "reddot": 129,
    "scope2x": 159,
    "scope4x": 160,
    "sniper": 122,
    "freelook": 142
  },
  {
    "name": "Realme C75",
    "general": 160,
    "reddot": 157,
    "scope2x": 107,
    "scope4x": 150,
    "sniper": 118,
    "freelook": 144
  },
  {
    "name": "Tecno Camon 40 Premier",
    "general": 156,
    "reddot": 117,
    "scope2x": 132,
    "scope4x": 160,
    "sniper": 140,
    "freelook": 148
  },
  {
    "name": "Tecno Camon 40 Pro 5G",
    "general": 135,
    "reddot": 140,
    "scope2x": 153,
    "scope4x": 82,
    "sniper": 125,
    "freelook": 116
  },
  {
    "name": "Tecno Camon 40",
    "general": 141,
    "reddot": 85,
    "scope2x": 140,
    "scope4x": 152,
    "sniper": 155,
    "freelook": 91
  },
  {
    "name": "Tecno Pova 6 Pro 5G",
    "general": 147,
    "reddot": 134,
    "scope2x": 135,
    "scope4x": 114,
    "sniper": 138,
    "freelook": 124
  },
  {
    "name": "Tecno Spark 30 Pro",
    "general": 146,
    "reddot": 157,
    "scope2x": 141,
    "scope4x": 138,
    "sniper": 86,
    "freelook": 118
  },
  {
    "name": "Infinix Hot 50 Pro+",
    "general": 107,
    "reddot": 101,
    "scope2x": 84,
    "scope4x": 134,
    "sniper": 126,
    "freelook": 116
  },
  {
    "name": "Infinix Smart 9 HD",
    "general": 114,
    "reddot": 138,
    "scope2x": 117,
    "scope4x": 154,
    "sniper": 80,
    "freelook": 137
  },
  {
    "name": "Honor X9b",
    "general": 154,
    "reddot": 152,
    "scope2x": 153,
    "scope4x": 143,
    "sniper": 117,
    "freelook": 158
  },
  {
    "name": "Honor 200 Pro",
    "general": 156,
    "reddot": 93,
    "scope2x": 131,
    "scope4x": 137,
    "sniper": 139,
    "freelook": 120
  },
  {
    "name": "Honor 200",
    "general": 141,
    "reddot": 117,
    "scope2x": 103,
    "scope4x": 123,
    "sniper": 96,
    "freelook": 86
  },
  {
    "name": "Huawei Mate 76 Pro",
    "general": 91,
    "reddot": 103,
    "scope2x": 158,
    "scope4x": 141,
    "sniper": 137,
    "freelook": 128
  },
  {
    "name": "Huawei Mate 124 RS Ultimate",
    "general": 111,
    "reddot": 101,
    "scope2x": 153,
    "scope4x": 124,
    "sniper": 133,
    "freelook": 135
  },
  {
    "name": "Samsung Galaxy M35 5G",
    "general": 109,
    "reddot": 138,
    "scope2x": 132,
    "scope4x": 152,
    "sniper": 90,
    "freelook": 81
  },
  {
    "name": "Samsung Galaxy F55 5G",
    "general": 83,
    "reddot": 125,
    "scope2x": 84,
    "scope4x": 120,
    "sniper": 148,
    "freelook": 102
  },
  {
    "name": "Samsung Galaxy F15 5G",
    "general": 123,
    "reddot": 152,
    "scope2x": 125,
    "scope4x": 85,
    "sniper": 83,
    "freelook": 139
  },
  {
    "name": "Samsung Galaxy A16 5G",
    "general": 84,
    "reddot": 107,
    "scope2x": 93,
    "scope4x": 155,
    "sniper": 156,
    "freelook": 103
  },
  {
    "name": "Motorola Edge 50 Ultra",
    "general": 94,
    "reddot": 132,
    "scope2x": 91,
    "scope4x": 119,
    "sniper": 112,
    "freelook": 85
  },
  {
    "name": "Motorola Edge 50 Pro",
    "general": 107,
    "reddot": 110,
    "scope2x": 110,
    "scope4x": 117,
    "sniper": 136,
    "freelook": 86
  },
  {
    "name": "Motorola Edge 50 Fusion",
    "general": 129,
    "reddot": 155,
    "scope2x": 101,
    "scope4x": 83,
    "sniper": 98,
    "freelook": 145
  },
  {
    "name": "Motorola Moto G85",
    "general": 137,
    "reddot": 152,
    "scope2x": 117,
    "scope4x": 118,
    "sniper": 134,
    "freelook": 88
  },
  {
    "name": "Motorola Moto G75",
    "general": 148,
    "reddot": 99,
    "scope2x": 101,
    "scope4x": 88,
    "sniper": 102,
    "freelook": 85
  },
  {
    "name": "OPPO Reno13 Pro",
    "general": 144,
    "reddot": 108,
    "scope2x": 99,
    "scope4x": 144,
    "sniper": 135,
    "freelook": 120
  },
  {
    "name": "OPPO Reno13",
    "general": 146,
    "reddot": 111,
    "scope2x": 111,
    "scope4x": 106,
    "sniper": 83,
    "freelook": 130
  },
  {
    "name": "OPPO Reno13 F",
    "general": 102,
    "reddot": 157,
    "scope2x": 80,
    "scope4x": 127,
    "sniper": 145,
    "freelook": 135
  },
  {
    "name": "vivo V40 Pro",
    "general": 111,
    "reddot": 99,
    "scope2x": 112,
    "scope4x": 114,
    "sniper": 156,
    "freelook": 102
  },
  {
    "name": "vivo T3 Ultra",
    "general": 87,
    "reddot": 85,
    "scope2x": 99,
    "scope4x": 108,
    "sniper": 155,
    "freelook": 95
  },
  {
    "name": "vivo Y300 Plus",
    "general": 117,
    "reddot": 150,
    "scope2x": 122,
    "scope4x": 141,
    "sniper": 153,
    "freelook": 136
  },
  {
    "name": "vivo Y200 Pro",
    "general": 146,
    "reddot": 138,
    "scope2x": 110,
    "scope4x": 155,
    "sniper": 118,
    "freelook": 147
  },
  {
    "name": "Xiaomi 14 Pro",
    "general": 90,
    "reddot": 106,
    "scope2x": 139,
    "scope4x": 146,
    "sniper": 122,
    "freelook": 126
  },
  {
    "name": "Redmi K80 Pro",
    "general": 90,
    "reddot": 88,
    "scope2x": 113,
    "scope4x": 122,
    "sniper": 93,
    "freelook": 122
  },
  {
    "name": "Redmi K80",
    "general": 140,
    "reddot": 159,
    "scope2x": 114,
    "scope4x": 96,
    "sniper": 148,
    "freelook": 151
  },
  {
    "name": "Redmi Note 14 Pro 4G",
    "general": 129,
    "reddot": 95,
    "scope2x": 100,
    "scope4x": 86,
    "sniper": 124,
    "freelook": 91
  },
  {
    "name": "Redmi Note 14 4G",
    "general": 103,
    "reddot": 86,
    "scope2x": 102,
    "scope4x": 142,
    "sniper": 132,
    "freelook": 143
  },
  {
    "name": "POCO C75",
    "general": 139,
    "reddot": 134,
    "scope2x": 141,
    "scope4x": 158,
    "sniper": 136,
    "freelook": 100
  },
  {
    "name": "POCO M6 Plus 5G",
    "general": 111,
    "reddot": 94,
    "scope2x": 136,
    "scope4x": 105,
    "sniper": 95,
    "freelook": 128
  },
  {
    "name": "ASUS ROG Phone 9 Pro",
    "general": 109,
    "reddot": 136,
    "scope2x": 103,
    "scope4x": 116,
    "sniper": 95,
    "freelook": 81
  },
  {
    "name": "ASUS ROG Phone 9",
    "general": 89,
    "reddot": 114,
    "scope2x": 116,
    "scope4x": 83,
    "sniper": 129,
    "freelook": 152
  },
  {
    "name": "Nubia Z70 Ultra",
    "general": 146,
    "reddot": 120,
    "scope2x": 149,
    "scope4x": 128,
    "sniper": 152,
    "freelook": 133
  },
  {
    "name": "RedMagic 10 Pro",
    "general": 114,
    "reddot": 113,
    "scope2x": 101,
    "scope4x": 82,
    "sniper": 159,
    "freelook": 87
  },
  {
    "name": "Honor Magic6 Ultimate",
    "general": 132,
    "reddot": 131,
    "scope2x": 142,
    "scope4x": 107,
    "sniper": 106,
    "freelook": 148
  },
  {
    "name": "Honor Magic6 RSR",
    "general": 86,
    "reddot": 99,
    "scope2x": 86,
    "scope4x": 83,
    "sniper": 137,
    "freelook": 81
  },
  {
    "name": "Honor X8c",
    "general": 131,
    "reddot": 156,
    "scope2x": 121,
    "scope4x": 103,
    "sniper": 129,
    "freelook": 121
  },
  {
    "name": "Honor Play 79 Plus",
    "general": 101,
    "reddot": 140,
    "scope2x": 121,
    "scope4x": 123,
    "sniper": 153,
    "freelook": 141
  },
  {
    "name": "Huawei Pura 109 Ultra",
    "general": 89,
    "reddot": 90,
    "scope2x": 121,
    "scope4x": 152,
    "sniper": 152,
    "freelook": 95
  },
  {
    "name": "Huawei Pura 117 Pro",
    "general": 149,
    "reddot": 85,
    "scope2x": 94,
    "scope4x": 84,
    "sniper": 105,
    "freelook": 116
  },
  {
    "name": "iPhone 13 mini",
    "general": 118,
    "reddot": 138,
    "scope2x": 123,
    "scope4x": 132,
    "sniper": 104,
    "freelook": 81
  },
  {
    "name": "Sony Xperia 1 VI",
    "general": 122,
    "reddot": 153,
    "scope2x": 122,
    "scope4x": 150,
    "sniper": 133,
    "freelook": 148
  },
  {
    "name": "Sony Xperia 5 V",
    "general": 114,
    "reddot": 146,
    "scope2x": 139,
    "scope4x": 110,
    "sniper": 150,
    "freelook": 147
  },
  {
    "name": "Sony Xperia 10 VI",
    "general": 159,
    "reddot": 85,
    "scope2x": 127,
    "scope4x": 100,
    "sniper": 101,
    "freelook": 99
  },
  {
    "name": "HMD Skyline",
    "general": 120,
    "reddot": 90,
    "scope2x": 92,
    "scope4x": 92,
    "sniper": 90,
    "freelook": 144
  },
  {
    "name": "HMD Pulse Pro",
    "general": 125,
    "reddot": 134,
    "scope2x": 132,
    "scope4x": 87,
    "sniper": 110,
    "freelook": 120
  },
  {
    "name": "HMD Pulse Plus",
    "general": 118,
    "reddot": 159,
    "scope2x": 99,
    "scope4x": 108,
    "sniper": 124,
    "freelook": 157
  },
  {
    "name": "HMD Pulse",
    "general": 143,
    "reddot": 88,
    "scope2x": 91,
    "scope4x": 129,
    "sniper": 122,
    "freelook": 92
  },
  {
    "name": "Nokia X30",
    "general": 100,
    "reddot": 138,
    "scope2x": 149,
    "scope4x": 89,
    "sniper": 116,
    "freelook": 84
  },
  {
    "name": "Nokia G42 5G",
    "general": 140,
    "reddot": 117,
    "scope2x": 110,
    "scope4x": 99,
    "sniper": 133,
    "freelook": 91
  },
  {
    "name": "Samsung Galaxy S9+",
    "general": 144,
    "reddot": 134,
    "scope2x": 159,
    "scope4x": 112,
    "sniper": 116,
    "freelook": 155
  },
  {
    "name": "Huawei Nova 13",
    "general": 145,
    "reddot": 88,
    "scope2x": 114,
    "scope4x": 88,
    "sniper": 147,
    "freelook": 91
  },
  {
    "name": "Redmi 14C",
    "general": 110,
    "reddot": 113,
    "scope2x": 140,
    "scope4x": 99,
    "sniper": 141,
    "freelook": 109
  },
  {
    "name": "Tecno Pop 5",
    "general": 116,
    "reddot": 114,
    "scope2x": 114,
    "scope4x": 95,
    "sniper": 110,
    "freelook": 80
  },
  {
    "name": "itel S26",
    "general": 112,
    "reddot": 121,
    "scope2x": 143,
    "scope4x": 154,
    "sniper": 127,
    "freelook": 147
  },
  {
    "name": "itel Super 26 Ultra",
    "general": 106,
    "reddot": 133,
    "scope2x": 157,
    "scope4x": 97,
    "sniper": 97,
    "freelook": 132
  },
  {
    "name": "iPhone XR",
    "general": 69,
    "reddot": 123,
    "scope2x": 112,
    "scope4x": 143,
    "sniper": 75,
    "freelook": 138
  },
  {
    "name": "Tecno Camon 40",
    "general": 124,
    "reddot": 81,
    "scope2x": 83,
    "scope4x": 112,
    "sniper": 133,
    "freelook": 111
  },
  {
    "name": "itel A100",
    "general": 154,
    "reddot": 112,
    "scope2x": 159,
    "scope4x": 107,
    "sniper": 159,
    "freelook": 159
  },
  {
    "name": "Samsung Galaxy A02",
    "general": 151,
    "reddot": 149,
    "scope2x": 96,
    "scope4x": 141,
    "sniper": 67,
    "freelook": 114
  },
  {
    "name": "Samsung Galaxy A02s",
    "general": 91,
    "reddot": 146,
    "scope2x": 102,
    "scope4x": 153,
    "sniper": 128,
    "freelook": 110
  },
  {
    "name": "Samsung Galaxy A03",
    "general": 134,
    "reddot": 81,
    "scope2x": 61,
    "scope4x": 119,
    "sniper": 133,
    "freelook": 152
  },
  {
    "name": "Samsung Galaxy A03 Core",
    "general": 156,
    "reddot": 66,
    "scope2x": 132,
    "scope4x": 91,
    "sniper": 105,
    "freelook": 112
  },
  {
    "name": "Samsung Galaxy A04",
    "general": 152,
    "reddot": 121,
    "scope2x": 137,
    "scope4x": 153,
    "sniper": 92,
    "freelook": 80
  },
  {
    "name": "Samsung Galaxy A04e",
    "general": 156,
    "reddot": 119,
    "scope2x": 93,
    "scope4x": 137,
    "sniper": 97,
    "freelook": 61
  },
  {
    "name": "Samsung Galaxy A04s",
    "general": 78,
    "reddot": 140,
    "scope2x": 132,
    "scope4x": 153,
    "sniper": 76,
    "freelook": 111
  },
  {
    "name": "Samsung Galaxy A05",
    "general": 80,
    "reddot": 101,
    "scope2x": 127,
    "scope4x": 96,
    "sniper": 103,
    "freelook": 60
  },
  {
    "name": "Samsung Galaxy A05s",
    "general": 84,
    "reddot": 128,
    "scope2x": 117,
    "scope4x": 82,
    "sniper": 154,
    "freelook": 100
  },
  {
    "name": "Samsung Galaxy A06",
    "general": 118,
    "reddot": 87,
    "scope2x": 104,
    "scope4x": 62,
    "sniper": 97,
    "freelook": 70
  },
  {
    "name": "Samsung Galaxy A10s",
    "general": 66,
    "reddot": 80,
    "scope2x": 142,
    "scope4x": 129,
    "sniper": 127,
    "freelook": 124
  },
  {
    "name": "Samsung Galaxy A11",
    "general": 132,
    "reddot": 141,
    "scope2x": 112,
    "scope4x": 116,
    "sniper": 147,
    "freelook": 140
  },
  {
    "name": "Samsung Galaxy A12",
    "general": 106,
    "reddot": 73,
    "scope2x": 99,
    "scope4x": 89,
    "sniper": 137,
    "freelook": 97
  },
  {
    "name": "Samsung Galaxy A13",
    "general": 95,
    "reddot": 113,
    "scope2x": 110,
    "scope4x": 108,
    "sniper": 139,
    "freelook": 99
  },
  {
    "name": "Samsung Galaxy A16",
    "general": 88,
    "reddot": 143,
    "scope2x": 64,
    "scope4x": 149,
    "sniper": 134,
    "freelook": 77
  },
  {
    "name": "Samsung Galaxy A20s",
    "general": 107,
    "reddot": 134,
    "scope2x": 124,
    "scope4x": 128,
    "sniper": 60,
    "freelook": 139
  },
  {
    "name": "Samsung Galaxy A21",
    "general": 158,
    "reddot": 66,
    "scope2x": 134,
    "scope4x": 106,
    "sniper": 144,
    "freelook": 112
  },
  {
    "name": "Samsung Galaxy A21s",
    "general": 123,
    "reddot": 140,
    "scope2x": 123,
    "scope4x": 151,
    "sniper": 119,
    "freelook": 96
  },
  {
    "name": "Samsung Galaxy A22",
    "general": 84,
    "reddot": 133,
    "scope2x": 75,
    "scope4x": 136,
    "sniper": 91,
    "freelook": 132
  },
  {
    "name": "Samsung Galaxy A23",
    "general": 136,
    "reddot": 87,
    "scope2x": 101,
    "scope4x": 79,
    "sniper": 65,
    "freelook": 154
  },
  {
    "name": "Samsung Galaxy A30",
    "general": 123,
    "reddot": 157,
    "scope2x": 105,
    "scope4x": 120,
    "sniper": 108,
    "freelook": 106
  },
  {
    "name": "Samsung Galaxy A30s",
    "general": 78,
    "reddot": 96,
    "scope2x": 81,
    "scope4x": 149,
    "sniper": 74,
    "freelook": 108
  },
  {
    "name": "Samsung Galaxy A31",
    "general": 143,
    "reddot": 82,
    "scope2x": 141,
    "scope4x": 79,
    "sniper": 69,
    "freelook": 101
  },
  {
    "name": "Samsung Galaxy A32",
    "general": 110,
    "reddot": 109,
    "scope2x": 83,
    "scope4x": 113,
    "sniper": 116,
    "freelook": 113
  },
  {
    "name": "Samsung Galaxy A33",
    "general": 142,
    "reddot": 97,
    "scope2x": 136,
    "scope4x": 84,
    "sniper": 142,
    "freelook": 105
  },
  {
    "name": "Samsung Galaxy A51",
    "general": 112,
    "reddot": 94,
    "scope2x": 71,
    "scope4x": 102,
    "sniper": 69,
    "freelook": 118
  },
  {
    "name": "Samsung Galaxy A52",
    "general": 153,
    "reddot": 138,
    "scope2x": 71,
    "scope4x": 134,
    "sniper": 101,
    "freelook": 157
  },
  {
    "name": "Samsung Galaxy A52s",
    "general": 60,
    "reddot": 76,
    "scope2x": 120,
    "scope4x": 78,
    "sniper": 111,
    "freelook": 157
  },
  {
    "name": "Samsung Galaxy A53",
    "general": 107,
    "reddot": 132,
    "scope2x": 94,
    "scope4x": 94,
    "sniper": 91,
    "freelook": 93
  },
  {
    "name": "Samsung Galaxy A70",
    "general": 72,
    "reddot": 78,
    "scope2x": 129,
    "scope4x": 123,
    "sniper": 108,
    "freelook": 116
  },
  {
    "name": "Samsung Galaxy A71",
    "general": 152,
    "reddot": 95,
    "scope2x": 88,
    "scope4x": 77,
    "sniper": 96,
    "freelook": 144
  },
  {
    "name": "Samsung Galaxy A72",
    "general": 152,
    "reddot": 144,
    "scope2x": 92,
    "scope4x": 120,
    "sniper": 60,
    "freelook": 106
  },
  {
    "name": "Samsung Galaxy A73",
    "general": 148,
    "reddot": 100,
    "scope2x": 60,
    "scope4x": 76,
    "sniper": 101,
    "freelook": 129
  },
  {
    "name": "Samsung Galaxy M11",
    "general": 128,
    "reddot": 102,
    "scope2x": 96,
    "scope4x": 123,
    "sniper": 118,
    "freelook": 122
  },
  {
    "name": "Samsung Galaxy M12",
    "general": 74,
    "reddot": 67,
    "scope2x": 110,
    "scope4x": 102,
    "sniper": 108,
    "freelook": 80
  },
  {
    "name": "Samsung Galaxy M13",
    "general": 105,
    "reddot": 111,
    "scope2x": 83,
    "scope4x": 141,
    "sniper": 110,
    "freelook": 156
  },
  {
    "name": "Samsung Galaxy M15",
    "general": 62,
    "reddot": 97,
    "scope2x": 67,
    "scope4x": 67,
    "sniper": 123,
    "freelook": 98
  },
  {
    "name": "Samsung Galaxy M21",
    "general": 98,
    "reddot": 98,
    "scope2x": 83,
    "scope4x": 68,
    "sniper": 114,
    "freelook": 96
  },
  {
    "name": "Samsung Galaxy M32",
    "general": 62,
    "reddot": 102,
    "scope2x": 98,
    "scope4x": 143,
    "sniper": 154,
    "freelook": 70
  },
  {
    "name": "Samsung Galaxy M33",
    "general": 81,
    "reddot": 64,
    "scope2x": 61,
    "scope4x": 69,
    "sniper": 60,
    "freelook": 78
  },
  {
    "name": "Samsung Galaxy M35",
    "general": 129,
    "reddot": 66,
    "scope2x": 143,
    "scope4x": 116,
    "sniper": 106,
    "freelook": 102
  },
  {
    "name": "Samsung Galaxy F13",
    "general": 83,
    "reddot": 152,
    "scope2x": 65,
    "scope4x": 146,
    "sniper": 69,
    "freelook": 72
  },
  {
    "name": "Samsung Galaxy F14",
    "general": 105,
    "reddot": 157,
    "scope2x": 80,
    "scope4x": 113,
    "sniper": 109,
    "freelook": 109
  },
  {
    "name": "Samsung Galaxy F15",
    "general": 75,
    "reddot": 84,
    "scope2x": 73,
    "scope4x": 87,
    "sniper": 159,
    "freelook": 134
  },
  {
    "name": "TECNO Spark Go 2022",
    "general": 78,
    "reddot": 60,
    "scope2x": 68,
    "scope4x": 102,
    "sniper": 123,
    "freelook": 135
  },
  {
    "name": "TECNO Spark 20 Pro+",
    "general": 98,
    "reddot": 136,
    "scope2x": 135,
    "scope4x": 159,
    "sniper": 79,
    "freelook": 140
  },
  {
    "name": "TECNO Spark 30C",
    "general": 91,
    "reddot": 106,
    "scope2x": 112,
    "scope4x": 94,
    "sniper": 113,
    "freelook": 75
  },
  {
    "name": "TECNO Camon 20 Pro",
    "general": 133,
    "reddot": 91,
    "scope2x": 128,
    "scope4x": 75,
    "sniper": 91,
    "freelook": 88
  },
  {
    "name": "TECNO Pova",
    "general": 111,
    "reddot": 72,
    "scope2x": 153,
    "scope4x": 129,
    "sniper": 152,
    "freelook": 102
  },
  {
    "name": "TECNO Pova 2",
    "general": 63,
    "reddot": 63,
    "scope2x": 73,
    "scope4x": 114,
    "sniper": 118,
    "freelook": 98
  },
  {
    "name": "TECNO Pova 3",
    "general": 137,
    "reddot": 109,
    "scope2x": 118,
    "scope4x": 87,
    "sniper": 85,
    "freelook": 93
  },
  {
    "name": "TECNO Pova 4",
    "general": 97,
    "reddot": 75,
    "scope2x": 100,
    "scope4x": 81,
    "sniper": 112,
    "freelook": 110
  },
  {
    "name": "TECNO Pova 5 Pro",
    "general": 122,
    "reddot": 72,
    "scope2x": 142,
    "scope4x": 85,
    "sniper": 129,
    "freelook": 145
  },
  {
    "name": "TECNO Pova 6 Pro",
    "general": 112,
    "reddot": 126,
    "scope2x": 84,
    "scope4x": 144,
    "sniper": 104,
    "freelook": 151
  },
  {
    "name": "Infinix Hot 11S",
    "general": 118,
    "reddot": 147,
    "scope2x": 125,
    "scope4x": 127,
    "sniper": 61,
    "freelook": 79
  },
  {
    "name": "Infinix Note 30 Pro",
    "general": 72,
    "reddot": 118,
    "scope2x": 90,
    "scope4x": 121,
    "sniper": 130,
    "freelook": 134
  },
  {
    "name": "Infinix GT 10 Pro",
    "general": 107,
    "reddot": 77,
    "scope2x": 64,
    "scope4x": 95,
    "sniper": 73,
    "freelook": 87
  },
  {
    "name": "Infinix GT 20 Pro",
    "general": 136,
    "reddot": 118,
    "scope2x": 106,
    "scope4x": 76,
    "sniper": 153,
    "freelook": 76
  },
  {
    "name": "itel A23",
    "general": 78,
    "reddot": 67,
    "scope2x": 68,
    "scope4x": 107,
    "sniper": 80,
    "freelook": 139
  },
  {
    "name": "itel A24",
    "general": 92,
    "reddot": 126,
    "scope2x": 94,
    "scope4x": 114,
    "sniper": 114,
    "freelook": 106
  },
  {
    "name": "itel A25",
    "general": 134,
    "reddot": 159,
    "scope2x": 140,
    "scope4x": 74,
    "sniper": 92,
    "freelook": 86
  },
  {
    "name": "itel A26",
    "general": 102,
    "reddot": 140,
    "scope2x": 126,
    "scope4x": 114,
    "sniper": 152,
    "freelook": 145
  },
  {
    "name": "itel A27",
    "general": 138,
    "reddot": 61,
    "scope2x": 154,
    "scope4x": 82,
    "sniper": 139,
    "freelook": 95
  },
  {
    "name": "itel A49",
    "general": 64,
    "reddot": 103,
    "scope2x": 82,
    "scope4x": 139,
    "sniper": 157,
    "freelook": 116
  },
  {
    "name": "itel A50",
    "general": 149,
    "reddot": 118,
    "scope2x": 121,
    "scope4x": 76,
    "sniper": 85,
    "freelook": 150
  },
  {
    "name": "itel A58",
    "general": 80,
    "reddot": 89,
    "scope2x": 145,
    "scope4x": 65,
    "sniper": 78,
    "freelook": 94
  },
  {
    "name": "itel A60",
    "general": 76,
    "reddot": 128,
    "scope2x": 84,
    "scope4x": 75,
    "sniper": 152,
    "freelook": 119
  },
  {
    "name": "itel A80",
    "general": 143,
    "reddot": 109,
    "scope2x": 113,
    "scope4x": 160,
    "sniper": 153,
    "freelook": 142
  },
  {
    "name": "itel S17",
    "general": 119,
    "reddot": 160,
    "scope2x": 160,
    "scope4x": 153,
    "sniper": 129,
    "freelook": 143
  },
  {
    "name": "itel Vision 1",
    "general": 144,
    "reddot": 66,
    "scope2x": 81,
    "scope4x": 135,
    "sniper": 139,
    "freelook": 126
  },
  {
    "name": "itel Vision 2",
    "general": 86,
    "reddot": 147,
    "scope2x": 150,
    "scope4x": 160,
    "sniper": 110,
    "freelook": 128
  },
  {
    "name": "Samsung Galaxy A01 Core",
    "general": 116,
    "reddot": 100,
    "scope2x": 73,
    "scope4x": 95,
    "sniper": 135,
    "freelook": 143
  },
  {
    "name": "Samsung Galaxy A03s",
    "general": 111,
    "reddot": 134,
    "scope2x": 90,
    "scope4x": 94,
    "sniper": 160,
    "freelook": 142
  },
  {
    "name": "Samsung Galaxy A10e",
    "general": 143,
    "reddot": 146,
    "scope2x": 135,
    "scope4x": 69,
    "sniper": 68,
    "freelook": 85
  },
  {
    "name": "Samsung Galaxy A12 Nacho",
    "general": 80,
    "reddot": 80,
    "scope2x": 157,
    "scope4x": 159,
    "sniper": 107,
    "freelook": 106
  },
  {
    "name": "Samsung Galaxy A13 5G",
    "general": 142,
    "reddot": 117,
    "scope2x": 134,
    "scope4x": 125,
    "sniper": 68,
    "freelook": 159
  },
  {
    "name": "Samsung Galaxy A14 5G",
    "general": 136,
    "reddot": 89,
    "scope2x": 60,
    "scope4x": 98,
    "sniper": 130,
    "freelook": 96
  },
  {
    "name": "Samsung Galaxy A15 5G",
    "general": 91,
    "reddot": 108,
    "scope2x": 102,
    "scope4x": 135,
    "sniper": 83,
    "freelook": 89
  },
  {
    "name": "Samsung Galaxy A20e",
    "general": 74,
    "reddot": 92,
    "scope2x": 71,
    "scope4x": 60,
    "sniper": 111,
    "freelook": 82
  },
  {
    "name": "Samsung Galaxy A22 5G",
    "general": 100,
    "reddot": 100,
    "scope2x": 99,
    "scope4x": 133,
    "sniper": 85,
    "freelook": 141
  },
  {
    "name": "Samsung Galaxy A23 5G",
    "general": 61,
    "reddot": 153,
    "scope2x": 114,
    "scope4x": 67,
    "sniper": 82,
    "freelook": 134
  },
  {
    "name": "Samsung Galaxy A25 5G",
    "general": 100,
    "reddot": 78,
    "scope2x": 110,
    "scope4x": 94,
    "sniper": 101,
    "freelook": 138
  },
  {
    "name": "Samsung Galaxy A32 5G",
    "general": 63,
    "reddot": 108,
    "scope2x": 158,
    "scope4x": 147,
    "sniper": 87,
    "freelook": 86
  },
  {
    "name": "Samsung Galaxy A33 5G",
    "general": 82,
    "reddot": 113,
    "scope2x": 81,
    "scope4x": 127,
    "sniper": 71,
    "freelook": 145
  },
  {
    "name": "Samsung Galaxy A34 5G",
    "general": 148,
    "reddot": 87,
    "scope2x": 153,
    "scope4x": 118,
    "sniper": 148,
    "freelook": 135
  },
  {
    "name": "Samsung Galaxy A35 5G",
    "general": 130,
    "reddot": 141,
    "scope2x": 110,
    "scope4x": 94,
    "sniper": 120,
    "freelook": 115
  },
  {
    "name": "Samsung Galaxy A40",
    "general": 154,
    "reddot": 130,
    "scope2x": 63,
    "scope4x": 94,
    "sniper": 107,
    "freelook": 93
  },
  {
    "name": "Samsung Galaxy A41",
    "general": 103,
    "reddot": 160,
    "scope2x": 80,
    "scope4x": 138,
    "sniper": 74,
    "freelook": 113
  },
  {
    "name": "Samsung Galaxy A42 5G",
    "general": 101,
    "reddot": 112,
    "scope2x": 84,
    "scope4x": 98,
    "sniper": 123,
    "freelook": 90
  },
  {
    "name": "Samsung Galaxy A50s",
    "general": 94,
    "reddot": 138,
    "scope2x": 136,
    "scope4x": 159,
    "sniper": 79,
    "freelook": 119
  },
  {
    "name": "Samsung Galaxy A51 5G",
    "general": 103,
    "reddot": 156,
    "scope2x": 153,
    "scope4x": 148,
    "sniper": 76,
    "freelook": 97
  },
  {
    "name": "Samsung Galaxy A52 5G",
    "general": 111,
    "reddot": 156,
    "scope2x": 115,
    "scope4x": 132,
    "sniper": 75,
    "freelook": 102
  },
  {
    "name": "Samsung Galaxy A52s 5G",
    "general": 133,
    "reddot": 146,
    "scope2x": 68,
    "scope4x": 119,
    "sniper": 63,
    "freelook": 70
  },
  {
    "name": "Samsung Galaxy A53 5G",
    "general": 76,
    "reddot": 91,
    "scope2x": 135,
    "scope4x": 116,
    "sniper": 133,
    "freelook": 105
  },
  {
    "name": "Samsung Galaxy A54 5G",
    "general": 84,
    "reddot": 105,
    "scope2x": 138,
    "scope4x": 135,
    "sniper": 61,
    "freelook": 69
  },
  {
    "name": "Samsung Galaxy A55 5G",
    "general": 133,
    "reddot": 106,
    "scope2x": 95,
    "scope4x": 158,
    "sniper": 149,
    "freelook": 113
  },
  {
    "name": "Samsung Galaxy A56 5G",
    "general": 123,
    "reddot": 110,
    "scope2x": 156,
    "scope4x": 95,
    "sniper": 135,
    "freelook": 158
  },
  {
    "name": "Samsung Galaxy A70s",
    "general": 88,
    "reddot": 84,
    "scope2x": 81,
    "scope4x": 129,
    "sniper": 72,
    "freelook": 134
  },
  {
    "name": "Samsung Galaxy A71 5G",
    "general": 134,
    "reddot": 66,
    "scope2x": 112,
    "scope4x": 80,
    "sniper": 90,
    "freelook": 93
  },
  {
    "name": "Samsung Galaxy A73 5G",
    "general": 79,
    "reddot": 147,
    "scope2x": 86,
    "scope4x": 69,
    "sniper": 150,
    "freelook": 132
  },
  {
    "name": "Samsung Galaxy A80",
    "general": 67,
    "reddot": 140,
    "scope2x": 160,
    "scope4x": 91,
    "sniper": 153,
    "freelook": 93
  },
  {
    "name": "Samsung Galaxy A90 5G",
    "general": 137,
    "reddot": 110,
    "scope2x": 131,
    "scope4x": 153,
    "sniper": 126,
    "freelook": 71
  },
  {
    "name": "iPhone 3G",
    "general": 141,
    "reddot": 66,
    "scope2x": 115,
    "scope4x": 53,
    "sniper": 107,
    "freelook": 96
  },
  {
    "name": "iPhone 3GS",
    "general": 102,
    "reddot": 130,
    "scope2x": 104,
    "scope4x": 135,
    "sniper": 129,
    "freelook": 88
  },
  {
    "name": "iPhone 4",
    "general": 96,
    "reddot": 135,
    "scope2x": 150,
    "scope4x": 89,
    "sniper": 98,
    "freelook": 105
  },
  {
    "name": "iPhone 4s",
    "general": 95,
    "reddot": 146,
    "scope2x": 116,
    "scope4x": 106,
    "sniper": 103,
    "freelook": 120
  },
  {
    "name": "iPhone 5",
    "general": 135,
    "reddot": 125,
    "scope2x": 66,
    "scope4x": 124,
    "sniper": 126,
    "freelook": 142
  },
  {
    "name": "iPhone 5c",
    "general": 70,
    "reddot": 65,
    "scope2x": 50,
    "scope4x": 141,
    "sniper": 135,
    "freelook": 83
  },
  {
    "name": "iPhone 6 Plus",
    "general": 63,
    "reddot": 145,
    "scope2x": 61,
    "scope4x": 106,
    "sniper": 129,
    "freelook": 135
  },
  {
    "name": "iPhone SE",
    "general": 86,
    "reddot": 147,
    "scope2x": 102,
    "scope4x": 145,
    "sniper": 98,
    "freelook": 105
  },
  {
    "name": "iPhone 7",
    "general": 139,
    "reddot": 149,
    "scope2x": 111,
    "scope4x": 144,
    "sniper": 71,
    "freelook": 134
  },
  {
    "name": "iPhone 7 Plus",
    "general": 63,
    "reddot": 98,
    "scope2x": 150,
    "scope4x": 146,
    "sniper": 143,
    "freelook": 109
  },
  {
    "name": "iPhone 8",
    "general": 83,
    "reddot": 134,
    "scope2x": 69,
    "scope4x": 50,
    "sniper": 51,
    "freelook": 93
  },
  {
    "name": "iPhone 8 Plus",
    "general": 147,
    "reddot": 60,
    "scope2x": 66,
    "scope4x": 100,
    "sniper": 107,
    "freelook": 108
  },
  {
    "name": "iPhone X",
    "general": 58,
    "reddot": 138,
    "scope2x": 136,
    "scope4x": 56,
    "sniper": 139,
    "freelook": 127
  },
  {
    "name": "iPhone XS",
    "general": 101,
    "reddot": 61,
    "scope2x": 114,
    "scope4x": 55,
    "sniper": 140,
    "freelook": 148
  },
  {
    "name": "iPhone XS Max",
    "general": 84,
    "reddot": 140,
    "scope2x": 54,
    "scope4x": 60,
    "sniper": 145,
    "freelook": 69
  },
  {
    "name": "iPhone 11 Pro",
    "general": 53,
    "reddot": 100,
    "scope2x": 79,
    "scope4x": 59,
    "sniper": 138,
    "freelook": 131
  },
  {
    "name": "iPhone SE (2nd generation)",
    "general": 130,
    "reddot": 146,
    "scope2x": 95,
    "scope4x": 82,
    "sniper": 62,
    "freelook": 117
  },
  {
    "name": "iPhone 12 mini",
    "general": 61,
    "reddot": 130,
    "scope2x": 136,
    "scope4x": 103,
    "sniper": 135,
    "freelook": 66
  },
  {
    "name": "iPhone SE (3rd generation)",
    "general": 66,
    "reddot": 117,
    "scope2x": 112,
    "scope4x": 130,
    "sniper": 130,
    "freelook": 147
  },
  {
    "name": "iPhone 16e",
    "general": 88,
    "reddot": 140,
    "scope2x": 112,
    "scope4x": 70,
    "sniper": 135,
    "freelook": 65
  },
  {
    "name": "iPad 2",
    "general": 119,
    "reddot": 120,
    "scope2x": 135,
    "scope4x": 116,
    "sniper": 74,
    "freelook": 150
  },
  {
    "name": "iPad (3rd generation)",
    "general": 138,
    "reddot": 51,
    "scope2x": 77,
    "scope4x": 83,
    "sniper": 150,
    "freelook": 76
  },
  {
    "name": "iPad (4th generation)",
    "general": 110,
    "reddot": 103,
    "scope2x": 81,
    "scope4x": 79,
    "sniper": 114,
    "freelook": 114
  },
  {
    "name": "iPad (5th generation)",
    "general": 83,
    "reddot": 110,
    "scope2x": 96,
    "scope4x": 86,
    "sniper": 53,
    "freelook": 135
  },
  {
    "name": "iPad (6th generation)",
    "general": 63,
    "reddot": 74,
    "scope2x": 126,
    "scope4x": 83,
    "sniper": 92,
    "freelook": 147
  },
  {
    "name": "iPad (7th generation)",
    "general": 132,
    "reddot": 118,
    "scope2x": 83,
    "scope4x": 101,
    "sniper": 103,
    "freelook": 91
  },
  {
    "name": "iPad (8th generation)",
    "general": 121,
    "reddot": 81,
    "scope2x": 97,
    "scope4x": 87,
    "sniper": 85,
    "freelook": 90
  },
  {
    "name": "iPad (9th generation)",
    "general": 95,
    "reddot": 76,
    "scope2x": 85,
    "scope4x": 105,
    "sniper": 73,
    "freelook": 125
  },
  {
    "name": "iPad (10th generation)",
    "general": 60,
    "reddot": 101,
    "scope2x": 83,
    "scope4x": 130,
    "sniper": 103,
    "freelook": 111
  },
  {
    "name": "iPad (11th generation)",
    "general": 64,
    "reddot": 108,
    "scope2x": 59,
    "scope4x": 137,
    "sniper": 123,
    "freelook": 51
  },
  {
    "name": "iPad mini 2",
    "general": 59,
    "reddot": 110,
    "scope2x": 104,
    "scope4x": 83,
    "sniper": 117,
    "freelook": 70
  },
  {
    "name": "iPad mini 3",
    "general": 76,
    "reddot": 115,
    "scope2x": 135,
    "scope4x": 149,
    "sniper": 142,
    "freelook": 51
  },
  {
    "name": "iPad mini 4",
    "general": 64,
    "reddot": 138,
    "scope2x": 144,
    "scope4x": 123,
    "sniper": 81,
    "freelook": 73
  },
  {
    "name": "iPad mini (5th generation)",
    "general": 59,
    "reddot": 63,
    "scope2x": 84,
    "scope4x": 88,
    "sniper": 92,
    "freelook": 69
  },
  {
    "name": "iPad mini (6th generation)",
    "general": 95,
    "reddot": 51,
    "scope2x": 79,
    "scope4x": 85,
    "sniper": 104,
    "freelook": 55
  },
  {
    "name": "iPad mini (7th generation)",
    "general": 135,
    "reddot": 129,
    "scope2x": 149,
    "scope4x": 135,
    "sniper": 118,
    "freelook": 65
  },
  {
    "name": "iPad Air 2",
    "general": 59,
    "reddot": 96,
    "scope2x": 142,
    "scope4x": 137,
    "sniper": 129,
    "freelook": 82
  },
  {
    "name": "iPad Air (3rd generation)",
    "general": 130,
    "reddot": 129,
    "scope2x": 114,
    "scope4x": 150,
    "sniper": 118,
    "freelook": 120
  },
  {
    "name": "iPad Air (4th generation)",
    "general": 103,
    "reddot": 89,
    "scope2x": 110,
    "scope4x": 116,
    "sniper": 59,
    "freelook": 100
  },
  {
    "name": "iPad Air (5th generation)",
    "general": 86,
    "reddot": 124,
    "scope2x": 147,
    "scope4x": 70,
    "sniper": 104,
    "freelook": 107
  },
  {
    "name": "iPad Air 11-inch (M2)",
    "general": 139,
    "reddot": 96,
    "scope2x": 116,
    "scope4x": 74,
    "sniper": 126,
    "freelook": 103
  },
  {
    "name": "iPad Air 13-inch (M2)",
    "general": 116,
    "reddot": 125,
    "scope2x": 53,
    "scope4x": 100,
    "sniper": 55,
    "freelook": 121
  },
  {
    "name": "iPad Air 11-inch (M3)",
    "general": 81,
    "reddot": 75,
    "scope2x": 133,
    "scope4x": 82,
    "sniper": 53,
    "freelook": 134
  },
  {
    "name": "iPad Air 13-inch (M3)",
    "general": 65,
    "reddot": 88,
    "scope2x": 53,
    "scope4x": 142,
    "sniper": 132,
    "freelook": 131
  },
  {
    "name": "iPad Pro 9.7-inch",
    "general": 66,
    "reddot": 143,
    "scope2x": 137,
    "scope4x": 68,
    "sniper": 141,
    "freelook": 94
  },
  {
    "name": "iPad Pro 10.5-inch",
    "general": 146,
    "reddot": 93,
    "scope2x": 54,
    "scope4x": 133,
    "sniper": 64,
    "freelook": 115
  },
  {
    "name": "iPad Pro 11-inch (1st generation)",
    "general": 68,
    "reddot": 104,
    "scope2x": 128,
    "scope4x": 136,
    "sniper": 130,
    "freelook": 144
  },
  {
    "name": "iPad Pro 11-inch (2nd generation)",
    "general": 141,
    "reddot": 99,
    "scope2x": 79,
    "scope4x": 100,
    "sniper": 93,
    "freelook": 116
  },
  {
    "name": "iPad Pro 11-inch (3rd generation)",
    "general": 69,
    "reddot": 56,
    "scope2x": 51,
    "scope4x": 80,
    "sniper": 115,
    "freelook": 107
  },
  {
    "name": "iPad Pro 11-inch (4th generation)",
    "general": 118,
    "reddot": 56,
    "scope2x": 117,
    "scope4x": 62,
    "sniper": 74,
    "freelook": 141
  },
  {
    "name": "iPad Pro 11-inch (M4)",
    "general": 53,
    "reddot": 52,
    "scope2x": 143,
    "scope4x": 138,
    "sniper": 104,
    "freelook": 143
  },
  {
    "name": "iPad Pro 12.9-inch (1st generation)",
    "general": 130,
    "reddot": 51,
    "scope2x": 53,
    "scope4x": 84,
    "sniper": 86,
    "freelook": 63
  },
  {
    "name": "iPad Pro 12.9-inch (2nd generation)",
    "general": 58,
    "reddot": 118,
    "scope2x": 104,
    "scope4x": 109,
    "sniper": 101,
    "freelook": 99
  },
  {
    "name": "iPad Pro 12.9-inch (3rd generation)",
    "general": 84,
    "reddot": 92,
    "scope2x": 93,
    "scope4x": 110,
    "sniper": 106,
    "freelook": 57
  },
  {
    "name": "iPad Pro 12.9-inch (4th generation)",
    "general": 62,
    "reddot": 125,
    "scope2x": 84,
    "scope4x": 114,
    "sniper": 147,
    "freelook": 100
  },
  {
    "name": "iPad Pro 12.9-inch (5th generation)",
    "general": 78,
    "reddot": 106,
    "scope2x": 80,
    "scope4x": 91,
    "sniper": 82,
    "freelook": 147
  },
  {
    "name": "iPad Pro 12.9-inch (6th generation)",
    "general": 86,
    "reddot": 141,
    "scope2x": 142,
    "scope4x": 126,
    "sniper": 133,
    "freelook": 80
  },
  {
    "name": "iPad Pro 13-inch (M4)",
    "general": 126,
    "reddot": 120,
    "scope2x": 67,
    "scope4x": 94,
    "sniper": 147,
    "freelook": 88
  },
  {
    "name": "HUAWEI P8",
    "general": 93,
    "reddot": 116,
    "scope2x": 159,
    "scope4x": 123,
    "sniper": 98,
    "freelook": 84
  },
  {
    "name": "HUAWEI P9",
    "general": 119,
    "reddot": 131,
    "scope2x": 105,
    "scope4x": 60,
    "sniper": 141,
    "freelook": 95
  },
  {
    "name": "HUAWEI P10",
    "general": 94,
    "reddot": 148,
    "scope2x": 71,
    "scope4x": 85,
    "sniper": 122,
    "freelook": 124
  },
  {
    "name": "HUAWEI P20",
    "general": 65,
    "reddot": 109,
    "scope2x": 151,
    "scope4x": 72,
    "sniper": 68,
    "freelook": 87
  },
  {
    "name": "HUAWEI P20 Pro",
    "general": 62,
    "reddot": 119,
    "scope2x": 128,
    "scope4x": 126,
    "sniper": 160,
    "freelook": 145
  },
  {
    "name": "HUAWEI P30",
    "general": 116,
    "reddot": 106,
    "scope2x": 141,
    "scope4x": 79,
    "sniper": 116,
    "freelook": 114
  },
  {
    "name": "HUAWEI P30 Lite",
    "general": 133,
    "reddot": 122,
    "scope2x": 114,
    "scope4x": 154,
    "sniper": 69,
    "freelook": 62
  },
  {
    "name": "HUAWEI P30 Pro",
    "general": 79,
    "reddot": 157,
    "scope2x": 80,
    "scope4x": 129,
    "sniper": 87,
    "freelook": 72
  },
  {
    "name": "P50",
    "general": 85,
    "reddot": 142,
    "scope2x": 158,
    "scope4x": 80,
    "sniper": 80,
    "freelook": 79
  },
  {
    "name": "P50 Pro",
    "general": 131,
    "reddot": 83,
    "scope2x": 84,
    "scope4x": 111,
    "sniper": 117,
    "freelook": 90
  },
  {
    "name": "P60",
    "general": 127,
    "reddot": 84,
    "scope2x": 159,
    "scope4x": 141,
    "sniper": 126,
    "freelook": 78
  },
  {
    "name": "P60 Pro",
    "general": 82,
    "reddot": 90,
    "scope2x": 137,
    "scope4x": 124,
    "sniper": 115,
    "freelook": 124
  },
  {
    "name": "HUAWEI Mate 10",
    "general": 143,
    "reddot": 124,
    "scope2x": 103,
    "scope4x": 69,
    "sniper": 81,
    "freelook": 139
  },
  {
    "name": "HUAWEI Mate 10 Pro",
    "general": 68,
    "reddot": 67,
    "scope2x": 111,
    "scope4x": 117,
    "sniper": 79,
    "freelook": 137
  },
  {
    "name": "HUAWEI Mate 20",
    "general": 101,
    "reddot": 114,
    "scope2x": 119,
    "scope4x": 81,
    "sniper": 134,
    "freelook": 131
  },
  {
    "name": "HUAWEI Mate 20 Pro",
    "general": 69,
    "reddot": 90,
    "scope2x": 155,
    "scope4x": 157,
    "sniper": 127,
    "freelook": 112
  },
  {
    "name": "HUAWEI Mate 30",
    "general": 122,
    "reddot": 145,
    "scope2x": 129,
    "scope4x": 154,
    "sniper": 87,
    "freelook": 108
  },
  {
    "name": "HUAWEI Mate 30 Pro",
    "general": 100,
    "reddot": 158,
    "scope2x": 147,
    "scope4x": 154,
    "sniper": 95,
    "freelook": 157
  },
  {
    "name": "HUAWEI Mate 40",
    "general": 107,
    "reddot": 74,
    "scope2x": 89,
    "scope4x": 112,
    "sniper": 147,
    "freelook": 72
  },
  {
    "name": "HUAWEI Mate 40 Pro",
    "general": 71,
    "reddot": 73,
    "scope2x": 76,
    "scope4x": 109,
    "sniper": 64,
    "freelook": 90
  },
  {
    "name": "HUAWEI Mate 50",
    "general": 76,
    "reddot": 61,
    "scope2x": 96,
    "scope4x": 149,
    "sniper": 148,
    "freelook": 148
  },
  {
    "name": "HUAWEI Mate 50 Pro",
    "general": 127,
    "reddot": 66,
    "scope2x": 149,
    "scope4x": 88,
    "sniper": 136,
    "freelook": 128
  },
  {
    "name": "HUAWEI Mate 60",
    "general": 91,
    "reddot": 136,
    "scope2x": 97,
    "scope4x": 86,
    "sniper": 64,
    "freelook": 96
  },
  {
    "name": "HUAWEI Mate 60 Pro",
    "general": 61,
    "reddot": 130,
    "scope2x": 125,
    "scope4x": 114,
    "sniper": 99,
    "freelook": 85
  },
  {
    "name": "HUAWEI Nova 3",
    "general": 76,
    "reddot": 110,
    "scope2x": 119,
    "scope4x": 113,
    "sniper": 154,
    "freelook": 62
  },
  {
    "name": "HUAWEI Nova 4",
    "general": 80,
    "reddot": 105,
    "scope2x": 151,
    "scope4x": 96,
    "sniper": 65,
    "freelook": 94
  },
  {
    "name": "HUAWEI Nova 5T",
    "general": 86,
    "reddot": 118,
    "scope2x": 124,
    "scope4x": 134,
    "sniper": 150,
    "freelook": 160
  },
  {
    "name": "HUAWEI Nova 7",
    "general": 85,
    "reddot": 139,
    "scope2x": 80,
    "scope4x": 72,
    "sniper": 85,
    "freelook": 74
  },
  {
    "name": "HUAWEI Nova 8",
    "general": 135,
    "reddot": 141,
    "scope2x": 88,
    "scope4x": 144,
    "sniper": 65,
    "freelook": 128
  },
  {
    "name": "HUAWEI Nova 9",
    "general": 92,
    "reddot": 156,
    "scope2x": 121,
    "scope4x": 129,
    "sniper": 62,
    "freelook": 109
  },
  {
    "name": "HUAWEI Nova 10",
    "general": 117,
    "reddot": 153,
    "scope2x": 107,
    "scope4x": 117,
    "sniper": 75,
    "freelook": 140
  },
  {
    "name": "HUAWEI Nova 11",
    "general": 81,
    "reddot": 152,
    "scope2x": 130,
    "scope4x": 148,
    "sniper": 99,
    "freelook": 126
  },
  {
    "name": "HUAWEI Nova 12",
    "general": 96,
    "reddot": 140,
    "scope2x": 107,
    "scope4x": 84,
    "sniper": 61,
    "freelook": 135
  },
  {
    "name": "HUAWEI Y5",
    "general": 126,
    "reddot": 138,
    "scope2x": 61,
    "scope4x": 119,
    "sniper": 69,
    "freelook": 86
  },
  {
    "name": "HUAWEI Y6",
    "general": 160,
    "reddot": 140,
    "scope2x": 94,
    "scope4x": 104,
    "sniper": 149,
    "freelook": 149
  },
  {
    "name": "HUAWEI Y7",
    "general": 148,
    "reddot": 126,
    "scope2x": 129,
    "scope4x": 157,
    "sniper": 76,
    "freelook": 152
  },
  {
    "name": "HUAWEI Y9",
    "general": 156,
    "reddot": 96,
    "scope2x": 91,
    "scope4x": 112,
    "sniper": 139,
    "freelook": 146
  },
  {
    "name": "HUAWEI Y9 Prime",
    "general": 133,
    "reddot": 62,
    "scope2x": 145,
    "scope4x": 78,
    "sniper": 138,
    "freelook": 85
  },
  {
    "name": "HUAWEI Y5p",
    "general": 84,
    "reddot": 96,
    "scope2x": 144,
    "scope4x": 78,
    "sniper": 80,
    "freelook": 64
  },
  {
    "name": "HUAWEI Y6p",
    "general": 89,
    "reddot": 100,
    "scope2x": 62,
    "scope4x": 102,
    "sniper": 103,
    "freelook": 109
  },
  {
    "name": "HUAWEI Y7p",
    "general": 96,
    "reddot": 61,
    "scope2x": 154,
    "scope4x": 94,
    "sniper": 156,
    "freelook": 68
  },
  {
    "name": "Y8p",
    "general": 139,
    "reddot": 150,
    "scope2x": 69,
    "scope4x": 93,
    "sniper": 142,
    "freelook": 61
  },
  {
    "name": "HUAWEI Y9a",
    "general": 82,
    "reddot": 110,
    "scope2x": 117,
    "scope4x": 115,
    "sniper": 63,
    "freelook": 140
  },
  {
    "name": "HUAWEI Enjoy 10",
    "general": 110,
    "reddot": 97,
    "scope2x": 137,
    "scope4x": 157,
    "sniper": 135,
    "freelook": 132
  },
  {
    "name": "HUAWEI Enjoy 20",
    "general": 152,
    "reddot": 88,
    "scope2x": 99,
    "scope4x": 112,
    "sniper": 116,
    "freelook": 86
  },
  {
    "name": "HUAWEI Enjoy 50",
    "general": 90,
    "reddot": 66,
    "scope2x": 76,
    "scope4x": 129,
    "sniper": 76,
    "freelook": 92
  },
  {
    "name": "HUAWEI Mate X",
    "general": 92,
    "reddot": 111,
    "scope2x": 113,
    "scope4x": 92,
    "sniper": 129,
    "freelook": 117
  },
  {
    "name": "HUAWEI Mate X2",
    "general": 160,
    "reddot": 67,
    "scope2x": 96,
    "scope4x": 116,
    "sniper": 111,
    "freelook": 77
  },
  {
    "name": "HUAWEI Mate X3",
    "general": 86,
    "reddot": 82,
    "scope2x": 83,
    "scope4x": 120,
    "sniper": 158,
    "freelook": 106
  },
  {
    "name": "HUAWEI Mate X5",
    "general": 157,
    "reddot": 158,
    "scope2x": 127,
    "scope4x": 74,
    "sniper": 109,
    "freelook": 103
  },
  {
    "name": "HONOR Honor 8",
    "general": 107,
    "reddot": 127,
    "scope2x": 154,
    "scope4x": 84,
    "sniper": 158,
    "freelook": 133
  },
  {
    "name": "HONOR Honor 9",
    "general": 65,
    "reddot": 139,
    "scope2x": 116,
    "scope4x": 97,
    "sniper": 78,
    "freelook": 104
  },
  {
    "name": "HONOR Honor 10",
    "general": 159,
    "reddot": 112,
    "scope2x": 123,
    "scope4x": 72,
    "sniper": 100,
    "freelook": 73
  },
  {
    "name": "HONOR Honor 20",
    "general": 137,
    "reddot": 108,
    "scope2x": 89,
    "scope4x": 77,
    "sniper": 85,
    "freelook": 94
  },
  {
    "name": "HONOR Honor 20 Pro",
    "general": 89,
    "reddot": 67,
    "scope2x": 74,
    "scope4x": 158,
    "sniper": 103,
    "freelook": 64
  },
  {
    "name": "HONOR Honor 30",
    "general": 147,
    "reddot": 77,
    "scope2x": 99,
    "scope4x": 156,
    "sniper": 61,
    "freelook": 124
  },
  {
    "name": "HONOR Honor 30 Pro",
    "general": 156,
    "reddot": 90,
    "scope2x": 83,
    "scope4x": 78,
    "sniper": 64,
    "freelook": 75
  },
  {
    "name": "HONOR Honor 50",
    "general": 147,
    "reddot": 106,
    "scope2x": 96,
    "scope4x": 88,
    "sniper": 144,
    "freelook": 135
  },
  {
    "name": "HONOR Honor 60",
    "general": 88,
    "reddot": 62,
    "scope2x": 61,
    "scope4x": 138,
    "sniper": 143,
    "freelook": 90
  },
  {
    "name": "HONOR Honor 70",
    "general": 77,
    "reddot": 106,
    "scope2x": 125,
    "scope4x": 132,
    "sniper": 74,
    "freelook": 78
  },
  {
    "name": "HONOR Honor 80",
    "general": 126,
    "reddot": 86,
    "scope2x": 112,
    "scope4x": 94,
    "sniper": 65,
    "freelook": 141
  },
  {
    "name": "HONOR Honor 90",
    "general": 112,
    "reddot": 159,
    "scope2x": 78,
    "scope4x": 112,
    "sniper": 74,
    "freelook": 118
  },
  {
    "name": "HONOR Honor 100",
    "general": 116,
    "reddot": 93,
    "scope2x": 121,
    "scope4x": 97,
    "sniper": 78,
    "freelook": 75
  },
  {
    "name": "HONOR Honor 200",
    "general": 112,
    "reddot": 160,
    "scope2x": 98,
    "scope4x": 66,
    "sniper": 77,
    "freelook": 100
  },
  {
    "name": "HONOR Honor X5",
    "general": 145,
    "reddot": 115,
    "scope2x": 138,
    "scope4x": 142,
    "sniper": 117,
    "freelook": 104
  },
  {
    "name": "HONOR Honor X6",
    "general": 154,
    "reddot": 156,
    "scope2x": 123,
    "scope4x": 75,
    "sniper": 68,
    "freelook": 122
  },
  {
    "name": "HONOR Honor X7",
    "general": 82,
    "reddot": 119,
    "scope2x": 61,
    "scope4x": 92,
    "sniper": 101,
    "freelook": 145
  },
  {
    "name": "HONOR Honor X8",
    "general": 155,
    "reddot": 157,
    "scope2x": 103,
    "scope4x": 113,
    "sniper": 80,
    "freelook": 113
  },
  {
    "name": "HONOR Honor X9",
    "general": 146,
    "reddot": 92,
    "scope2x": 73,
    "scope4x": 60,
    "sniper": 124,
    "freelook": 143
  },
  {
    "name": "HONOR Honor X50",
    "general": 130,
    "reddot": 63,
    "scope2x": 126,
    "scope4x": 143,
    "sniper": 112,
    "freelook": 92
  },
  {
    "name": "HONOR Honor X60",
    "general": 90,
    "reddot": 158,
    "scope2x": 153,
    "scope4x": 118,
    "sniper": 118,
    "freelook": 85
  },
  {
    "name": "HONOR Honor Play",
    "general": 61,
    "reddot": 103,
    "scope2x": 89,
    "scope4x": 78,
    "sniper": 76,
    "freelook": 110
  },
  {
    "name": "HONOR Honor Play 3",
    "general": 132,
    "reddot": 154,
    "scope2x": 158,
    "scope4x": 100,
    "sniper": 117,
    "freelook": 160
  },
  {
    "name": "HONOR Honor Play 4",
    "general": 103,
    "reddot": 71,
    "scope2x": 105,
    "scope4x": 117,
    "sniper": 138,
    "freelook": 139
  },
  {
    "name": "HONOR Honor Play 5",
    "general": 90,
    "reddot": 114,
    "scope2x": 92,
    "scope4x": 86,
    "sniper": 135,
    "freelook": 143
  },
  {
    "name": "HONOR Honor Magic",
    "general": 146,
    "reddot": 60,
    "scope2x": 124,
    "scope4x": 84,
    "sniper": 123,
    "freelook": 68
  },
  {
    "name": "HONOR Honor Magic2",
    "general": 87,
    "reddot": 65,
    "scope2x": 147,
    "scope4x": 106,
    "sniper": 96,
    "freelook": 149
  },
  {
    "name": "HONOR Honor Magic3",
    "general": 90,
    "reddot": 100,
    "scope2x": 90,
    "scope4x": 117,
    "sniper": 83,
    "freelook": 67
  },
  {
    "name": "HONOR Honor Magic4",
    "general": 92,
    "reddot": 75,
    "scope2x": 105,
    "scope4x": 139,
    "sniper": 61,
    "freelook": 64
  },
  {
    "name": "HONOR Honor Magic5",
    "general": 137,
    "reddot": 97,
    "scope2x": 127,
    "scope4x": 145,
    "sniper": 84,
    "freelook": 155
  },
  {
    "name": "HONOR Honor Magic6",
    "general": 141,
    "reddot": 146,
    "scope2x": 138,
    "scope4x": 72,
    "sniper": 134,
    "freelook": 75
  },
  {
    "name": "HONOR Honor Magic V",
    "general": 115,
    "reddot": 156,
    "scope2x": 128,
    "scope4x": 85,
    "sniper": 63,
    "freelook": 158
  },
  {
    "name": "HONOR Honor Magic Vs",
    "general": 146,
    "reddot": 77,
    "scope2x": 159,
    "scope4x": 128,
    "sniper": 159,
    "freelook": 70
  },
  {
    "name": "HONOR Honor Magic V2",
    "general": 77,
    "reddot": 107,
    "scope2x": 132,
    "scope4x": 82,
    "sniper": 66,
    "freelook": 151
  },
  {
    "name": "Google Pixel",
    "general": 67,
    "reddot": 154,
    "scope2x": 155,
    "scope4x": 142,
    "sniper": 89,
    "freelook": 81
  },
  {
    "name": "Google Pixel XL",
    "general": 118,
    "reddot": 136,
    "scope2x": 108,
    "scope4x": 152,
    "sniper": 117,
    "freelook": 91
  },
  {
    "name": "Google Pixel 2",
    "general": 65,
    "reddot": 96,
    "scope2x": 95,
    "scope4x": 160,
    "sniper": 136,
    "freelook": 68
  },
  {
    "name": "Google Pixel 2 XL",
    "general": 109,
    "reddot": 61,
    "scope2x": 88,
    "scope4x": 101,
    "sniper": 87,
    "freelook": 133
  },
  {
    "name": "Google Pixel 3",
    "general": 110,
    "reddot": 115,
    "scope2x": 124,
    "scope4x": 98,
    "sniper": 69,
    "freelook": 101
  },
  {
    "name": "Google Pixel 3 XL",
    "general": 101,
    "reddot": 60,
    "scope2x": 90,
    "scope4x": 146,
    "sniper": 158,
    "freelook": 138
  },
  {
    "name": "Google Pixel 3a",
    "general": 73,
    "reddot": 98,
    "scope2x": 152,
    "scope4x": 123,
    "sniper": 98,
    "freelook": 147
  },
  {
    "name": "Google Pixel 3a XL",
    "general": 131,
    "reddot": 122,
    "scope2x": 117,
    "scope4x": 137,
    "sniper": 72,
    "freelook": 60
  },
  {
    "name": "Google Pixel 4",
    "general": 126,
    "reddot": 80,
    "scope2x": 113,
    "scope4x": 157,
    "sniper": 145,
    "freelook": 102
  },
  {
    "name": "Google Pixel 4 XL",
    "general": 134,
    "reddot": 159,
    "scope2x": 91,
    "scope4x": 143,
    "sniper": 112,
    "freelook": 86
  },
  {
    "name": "Google Pixel 4a",
    "general": 90,
    "reddot": 111,
    "scope2x": 115,
    "scope4x": 120,
    "sniper": 148,
    "freelook": 66
  },
  {
    "name": "Google Pixel 4a 5G",
    "general": 85,
    "reddot": 154,
    "scope2x": 146,
    "scope4x": 101,
    "sniper": 156,
    "freelook": 124
  },
  {
    "name": "Google Pixel 5",
    "general": 121,
    "reddot": 139,
    "scope2x": 103,
    "scope4x": 106,
    "sniper": 71,
    "freelook": 73
  },
  {
    "name": "Google Pixel 5a",
    "general": 95,
    "reddot": 88,
    "scope2x": 121,
    "scope4x": 130,
    "sniper": 143,
    "freelook": 139
  },
  {
    "name": "Google Pixel 6",
    "general": 75,
    "reddot": 110,
    "scope2x": 86,
    "scope4x": 82,
    "sniper": 63,
    "freelook": 125
  },
  {
    "name": "Google Pixel 6 Pro",
    "general": 66,
    "reddot": 137,
    "scope2x": 72,
    "scope4x": 157,
    "sniper": 131,
    "freelook": 79
  },
  {
    "name": "Google Pixel 6a",
    "general": 119,
    "reddot": 70,
    "scope2x": 158,
    "scope4x": 69,
    "sniper": 111,
    "freelook": 84
  },
  {
    "name": "Google Pixel 7a",
    "general": 95,
    "reddot": 159,
    "scope2x": 100,
    "scope4x": 95,
    "sniper": 110,
    "freelook": 129
  },
  {
    "name": "Google Pixel 8a",
    "general": 154,
    "reddot": 86,
    "scope2x": 102,
    "scope4x": 93,
    "sniper": 77,
    "freelook": 119
  },
  {
    "name": "Google Pixel 9 Pro Fold",
    "general": 110,
    "reddot": 67,
    "scope2x": 141,
    "scope4x": 91,
    "sniper": 121,
    "freelook": 104
  },
  {
    "name": "Motorola Moto E",
    "general": 140,
    "reddot": 116,
    "scope2x": 115,
    "scope4x": 146,
    "sniper": 111,
    "freelook": 144
  },
  {
    "name": "Motorola Moto E4",
    "general": 133,
    "reddot": 148,
    "scope2x": 116,
    "scope4x": 115,
    "sniper": 133,
    "freelook": 123
  },
  {
    "name": "Motorola Moto E5",
    "general": 148,
    "reddot": 67,
    "scope2x": 143,
    "scope4x": 96,
    "sniper": 61,
    "freelook": 112
  },
  {
    "name": "Motorola Moto E6",
    "general": 126,
    "reddot": 70,
    "scope2x": 118,
    "scope4x": 101,
    "sniper": 117,
    "freelook": 84
  },
  {
    "name": "Motorola Moto E7",
    "general": 82,
    "reddot": 158,
    "scope2x": 155,
    "scope4x": 127,
    "sniper": 145,
    "freelook": 138
  },
  {
    "name": "Motorola Moto E13",
    "general": 158,
    "reddot": 76,
    "scope2x": 112,
    "scope4x": 77,
    "sniper": 114,
    "freelook": 131
  },
  {
    "name": "Motorola Moto E14",
    "general": 72,
    "reddot": 119,
    "scope2x": 154,
    "scope4x": 72,
    "sniper": 78,
    "freelook": 100
  },
  {
    "name": "Motorola Moto G4",
    "general": 134,
    "reddot": 135,
    "scope2x": 85,
    "scope4x": 119,
    "sniper": 83,
    "freelook": 66
  },
  {
    "name": "Motorola Moto G5",
    "general": 71,
    "reddot": 111,
    "scope2x": 150,
    "scope4x": 104,
    "sniper": 148,
    "freelook": 121
  },
  {
    "name": "Motorola Moto G5 Plus",
    "general": 154,
    "reddot": 158,
    "scope2x": 73,
    "scope4x": 123,
    "sniper": 103,
    "freelook": 139
  },
  {
    "name": "Motorola Moto G6",
    "general": 157,
    "reddot": 158,
    "scope2x": 113,
    "scope4x": 117,
    "sniper": 159,
    "freelook": 150
  },
  {
    "name": "Motorola Moto G7",
    "general": 120,
    "reddot": 70,
    "scope2x": 124,
    "scope4x": 72,
    "sniper": 86,
    "freelook": 127
  },
  {
    "name": "Motorola Moto G8",
    "general": 96,
    "reddot": 60,
    "scope2x": 111,
    "scope4x": 93,
    "sniper": 123,
    "freelook": 97
  },
  {
    "name": "Motorola Moto G9",
    "general": 74,
    "reddot": 66,
    "scope2x": 149,
    "scope4x": 66,
    "sniper": 145,
    "freelook": 73
  },
  {
    "name": "Motorola Moto G10",
    "general": 94,
    "reddot": 73,
    "scope2x": 70,
    "scope4x": 123,
    "sniper": 87,
    "freelook": 145
  },
  {
    "name": "Motorola Moto G20",
    "general": 112,
    "reddot": 152,
    "scope2x": 92,
    "scope4x": 148,
    "sniper": 85,
    "freelook": 128
  },
  {
    "name": "Motorola Moto G30",
    "general": 104,
    "reddot": 76,
    "scope2x": 62,
    "scope4x": 98,
    "sniper": 105,
    "freelook": 76
  },
  {
    "name": "Motorola Moto G31",
    "general": 66,
    "reddot": 100,
    "scope2x": 70,
    "scope4x": 139,
    "sniper": 92,
    "freelook": 95
  },
  {
    "name": "Motorola Moto G32",
    "general": 115,
    "reddot": 140,
    "scope2x": 134,
    "scope4x": 146,
    "sniper": 126,
    "freelook": 108
  },
  {
    "name": "Motorola Moto G41",
    "general": 73,
    "reddot": 84,
    "scope2x": 70,
    "scope4x": 157,
    "sniper": 100,
    "freelook": 121
  },
  {
    "name": "Motorola Moto G\n[6/29, 8:33\u202fPM] BIG XIXCO: brand:",
    "general": 137,
    "reddot": 96,
    "scope2x": 91,
    "scope4x": 98,
    "sniper": 157,
    "freelook": 79
  },
  {
    "name": ",\n    models: [",
    "general": 65,
    "reddot": 133,
    "scope2x": 79,
    "scope4x": 69,
    "sniper": 78,
    "freelook": 139
  },
  {
    "name": ",",
    "general": 80,
    "reddot": 129,
    "scope2x": 124,
    "scope4x": 90,
    "sniper": 102,
    "freelook": 60
  },
  {
    "name": "]\n  },\n\n  {\n    brand:",
    "general": 110,
    "reddot": 134,
    "scope2x": 78,
    "scope4x": 142,
    "sniper": 74,
    "freelook": 106
  },
  {
    "name": "[6/29, 8:33\u202fPM] BIG XIXCO: brand:",
    "general": 105,
    "reddot": 132,
    "scope2x": 137,
    "scope4x": 141,
    "sniper": 124,
    "freelook": 83
  },
  {
    "name": "[6/29, 8:34\u202fPM] BIG XIXCO: {\n  brand:",
    "general": 108,
    "reddot": 84,
    "scope2x": 148,
    "scope4x": 89,
    "sniper": 94,
    "freelook": 98
  },
  {
    "name": ",\n  models: [\n\n    // Redmi Note Series",
    "general": 117,
    "reddot": 112,
    "scope2x": 125,
    "scope4x": 130,
    "sniper": 137,
    "freelook": 144
  },
  {
    "name": ",\n\n    // Redmi K Series",
    "general": 154,
    "reddot": 100,
    "scope2x": 69,
    "scope4x": 159,
    "sniper": 104,
    "freelook": 143
  },
  {
    "name": "]\n},\n[6/29, 8:35\u202fPM] BIG XIXCO: {\n  brand:",
    "general": 139,
    "reddot": 123,
    "scope2x": 82,
    "scope4x": 88,
    "sniper": 129,
    "freelook": 90
  },
  {
    "name": ",\n  models: [\n\n    // F Series",
    "general": 71,
    "reddot": 98,
    "scope2x": 115,
    "scope4x": 127,
    "sniper": 141,
    "freelook": 84
  },
  {
    "name": ",\n\n    // X Series",
    "general": 74,
    "reddot": 112,
    "scope2x": 130,
    "scope4x": 74,
    "sniper": 99,
    "freelook": 123
  },
  {
    "name": ",\n\n    // M Series",
    "general": 99,
    "reddot": 117,
    "scope2x": 144,
    "scope4x": 135,
    "sniper": 76,
    "freelook": 156
  },
  {
    "name": ",\n\n    // C Series",
    "general": 70,
    "reddot": 91,
    "scope2x": 110,
    "scope4x": 152,
    "sniper": 66,
    "freelook": 107
  },
  {
    "name": ",\n\n    // GT Series",
    "general": 121,
    "reddot": 82,
    "scope2x": 64,
    "scope4x": 108,
    "sniper": 79,
    "freelook": 86
  },
  {
    "name": ",\n\n    // Tablets",
    "general": 92,
    "reddot": 71,
    "scope2x": 65,
    "scope4x": 75,
    "sniper": 136,
    "freelook": 136
  },
  {
    "name": ",\n  models: [\n\n    // Mi Series",
    "general": 101,
    "reddot": 107,
    "scope2x": 107,
    "scope4x": 110,
    "sniper": 65,
    "freelook": 109
  },
  {
    "name": ",\n\n    // Xiaomi Number Series",
    "general": 103,
    "reddot": 135,
    "scope2x": 66,
    "scope4x": 135,
    "sniper": 153,
    "freelook": 91
  },
  {
    "name": ",\n\n    // Xiaomi Civi",
    "general": 137,
    "reddot": 126,
    "scope2x": 101,
    "scope4x": 65,
    "sniper": 68,
    "freelook": 130
  },
  {
    "name": ",\n\n    // Mi A Android One",
    "general": 76,
    "reddot": 115,
    "scope2x": 75,
    "scope4x": 123,
    "sniper": 150,
    "freelook": 146
  },
  {
    "name": ",\n\n    // Mi Max",
    "general": 89,
    "reddot": 114,
    "scope2x": 140,
    "scope4x": 131,
    "sniper": 137,
    "freelook": 90
  },
  {
    "name": ",\n\n    // Mi Note",
    "general": 67,
    "reddot": 103,
    "scope2x": 117,
    "scope4x": 87,
    "sniper": 127,
    "freelook": 74
  },
  {
    "name": ",\n\n    // MIX Series",
    "general": 108,
    "reddot": 106,
    "scope2x": 85,
    "scope4x": 150,
    "sniper": 131,
    "freelook": 65
  },
  {
    "name": ",\n\n    // Foldables & Special Editions",
    "general": 81,
    "reddot": 110,
    "scope2x": 133,
    "scope4x": 99,
    "sniper": 98,
    "freelook": 151
  }
];
