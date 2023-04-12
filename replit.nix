{ pkgs }: {
	deps = [
		pkgs.tree
  pkgs.python39Packages.pip
  pkgs.vim
  pkgs.postgresql
  pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}