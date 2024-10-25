const gridContainer = document.getElementById('grid-container');
        for (let i = 0; i < 11500; i++) {
            const gridCell = document.createElement('div');
            gridCell.className = 'grid-cell';
            gridContainer.appendChild(gridCell);
        }