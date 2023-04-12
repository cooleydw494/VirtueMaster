#!/bin/bash

# Install ImageMagick if it is not already installed
if ! command -v convert &> /dev/null; then
	    if [[ "$(uname)" == "Linux" ]]; then
		            echo "Linux detected - Installing ImageMagick without sudo"
			            mkdir -p ~/software
				            cd ~/software
					            wget https://imagemagick.org/download/ImageMagick.tar.gz
						            tar xvzf ImageMagick.tar.gz
							            cd ImageMagick-*
								            ./configure --prefix=$HOME/local --disable-shared --with-png --with-jpeg
									            make -j4
										            make install
											            export PATH=$HOME/local/bin:$PATH
												            cd ../..
													        elif [[ "$(uname)" == "Darwin" ]]; then
															        echo "macOS detected - Installing ImageMagick using curl"
																        mkdir -p ~/software
																	        cd ~/software
																		        curl -LO https://imagemagick.org/download/releases/ImageMagick-7.1.0-2.tar.gz
																			        tar xvzf ImageMagick-7.1.0-2.tar.gz
																				        cd ImageMagick-7.1.0-2
																					        ./configure --prefix=$HOME/local --disable-shared --with-png --with-jpeg
																						        make -j4
																							        make install
																								        export PATH=$HOME/local/bin:$PATH
																									        cd ../..
																										    else
																											            echo "Unsupported operating system"
																												            exit 1
																													        fi
fi

# Create the custom-pngs directory if it doesn't already exist
mkdir -p assets/custom-pngs

# Convert logo.svg to PNG using ImageMagick
convert assets/custom-svgs/logo.svg assets/custom-pngs/logo.png

# Output success message
echo "SVG conversion complete."

# Uninstall ImageMagick if it was installed by this script
if ! command -v convert &> /dev/null; then
	    if [[ "$(uname)" == "Linux" ]]; then
		            echo "Uninstalling ImageMagick on Linux"
			            rm -rf ~/software
				            export PATH=$(echo $PATH | sed -e 's/:$HOME\/local\/bin//')
					        elif [[ "$(uname)" == "Darwin" ]]; then
							        echo "Uninstalling ImageMagick on macOS"
								        rm -rf ~/software
									        export PATH=$(echo $PATH | sed -e 's/:$HOME\/local\/bin//')
										    fi
fi

