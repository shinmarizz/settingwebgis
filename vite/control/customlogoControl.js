import logoJean from "../data/jean.jpeg";

export class LogoFate {
    onAdd(map) {
        this._map = map;
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img
                src="${logoJean}"
                alt="Logo Jean"
                style="width: 50px"
            >
        `
        return this._container;
    }

    onRemove() {
        this._container.remove();
        this._map = undefined;
    }
}