document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.has-tooltip');

  tooltips.forEach(tooltipElement => {
    tooltipElement.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove any existing active tooltips
      const activeTooltip = document.querySelector('.tooltip_active');
      if (activeTooltip) {
        activeTooltip.remove();
      }

      // Create a new tooltip element
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = tooltipElement.title;

      // Position the tooltip
      const rect = tooltipElement.getBoundingClientRect();
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.bottom}px`;

      // Toggle tooltip visibility
      tooltipElement.after(tooltip); // Insert tooltip after the element
      tooltip.classList.add('tooltip_active');
    });
  });

  // Hide tooltip if clicked outside
  document.addEventListener('click', (event) => {
    const activeTooltip = document.querySelector('.tooltip_active');
    if (activeTooltip && !event.target.classList.contains('has-tooltip')) {
      activeTooltip.remove();
    }
  });
});