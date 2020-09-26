.PHONY: all clean

all:
	@echo HX
	@which hx >/dev/null && hx || true

clean:
	@echo RM
	@rm -Rf build/*

