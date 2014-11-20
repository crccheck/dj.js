chrome=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
app=DJsEverywhere

all:
	DISPLAY=:0 $(chrome) --pack-extension=Source --pack-extension-key=key.pem --user-data-dir=/tmp/foooo
	mv Source.crx $(app).crx
