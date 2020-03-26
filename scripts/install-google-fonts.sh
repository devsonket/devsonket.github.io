_wgeturl="https://github.com/google/fonts/archive/master.tar.gz"
_gf="hindsiliguri"

# install wget
sudo apt-get install wget

# make sure a file with the same name doesn't already exist
rm -f $_gf.tar.gz

echo "Connecting to Github server..."
wget $_wgeturl -O $_gf.tar.gz

echo "Extracting the downloaded archive..."
tar -xf $_gf.tar.gz

echo "Creating the /usr/share/fonts/truetype/$_gf folder"
sudo mkdir -p /usr/share/fonts/truetype/$_gf

echo "Installing all .ttf fonts in /usr/share/fonts/truetype/$_gf"
find $PWD/fonts-master/ -name "*.ttf" -exec sudo install -m644 {} /usr/share/fonts/truetype/google-fonts/ \; || return 1

echo "Updating the font cache"
fc-cache -f > /dev/null

# clean up, but only the .tar.gz, the user may need the folder
rm -f $_gf.tar.gz

echo "Done."
