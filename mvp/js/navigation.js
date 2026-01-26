/**
 * Navigation Module - Tab Switching for Pattern/Problem/Person tabs
 *
 * Features:
 * - Click handler for tab buttons
 * - Show/hide tab content panels
 * - URL hash support for direct linking
 * - Keyboard accessibility
 */

(function() {
  'use strict';

  // Configuration
  var SELECTORS = {
    tabList: '.tabs__list',
    tab: '.tabs__tab',
    panel: '.tabs__panel',
    activeTab: '.tabs__tab--active',
    activePanel: '.tabs__panel--active'
  };

  var CLASSES = {
    activeTab: 'tabs__tab--active',
    activePanel: 'tabs__panel--active'
  };

  var ATTRIBUTES = {
    tabId: 'data-tab',
    panelId: 'data-panel'
  };

  /**
   * Initialize all tab components on the page
   */
  function initTabs() {
    var tabLists = document.querySelectorAll(SELECTORS.tabList);

    tabLists.forEach(function(tabList) {
      initTabList(tabList);
    });

    // Handle initial hash on page load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
  }

  /**
   * Initialize a single tab list
   * @param {HTMLElement} tabList - The tab list container element
   */
  function initTabList(tabList) {
    var tabs = tabList.querySelectorAll(SELECTORS.tab);

    tabs.forEach(function(tab) {
      // Click handler
      tab.addEventListener('click', function(event) {
        event.preventDefault();
        activateTab(tab);
      });

      // Keyboard handler for accessibility
      tab.addEventListener('keydown', function(event) {
        handleTabKeydown(event, tabs);
      });
    });
  }

  /**
   * Activate a specific tab and show its panel
   * @param {HTMLElement} tab - The tab button element to activate
   * @param {boolean} updateHash - Whether to update the URL hash (default: true)
   */
  function activateTab(tab, updateHash) {
    if (updateHash === undefined) {
      updateHash = true;
    }

    var tabList = tab.closest(SELECTORS.tabList);
    if (!tabList) return;

    var tabContainer = tabList.closest('.tabs');
    if (!tabContainer) return;

    var tabId = tab.getAttribute(ATTRIBUTES.tabId);
    if (!tabId) return;

    // Deactivate all tabs in this tab list
    var allTabs = tabList.querySelectorAll(SELECTORS.tab);
    allTabs.forEach(function(t) {
      t.classList.remove(CLASSES.activeTab);
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    // Activate the clicked tab
    tab.classList.add(CLASSES.activeTab);
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    // Hide all panels in this tab container
    var allPanels = tabContainer.querySelectorAll(SELECTORS.panel);
    allPanels.forEach(function(panel) {
      panel.classList.remove(CLASSES.activePanel);
      panel.setAttribute('hidden', 'true');
    });

    // Show the corresponding panel
    var targetPanel = tabContainer.querySelector('[' + ATTRIBUTES.panelId + '="' + tabId + '"]');
    if (targetPanel) {
      targetPanel.classList.add(CLASSES.activePanel);
      targetPanel.removeAttribute('hidden');
    }

    // Update URL hash for direct linking
    if (updateHash && tabId) {
      history.replaceState(null, null, '#' + tabId);
    }
  }

  /**
   * Handle keyboard navigation within tabs
   * @param {KeyboardEvent} event - The keyboard event
   * @param {NodeList} tabs - All tabs in the current tab list
   */
  function handleTabKeydown(event, tabs) {
    var currentTab = event.target;
    var tabsArray = Array.prototype.slice.call(tabs);
    var currentIndex = tabsArray.indexOf(currentTab);
    var targetIndex;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        targetIndex = currentIndex - 1;
        if (targetIndex < 0) {
          targetIndex = tabsArray.length - 1;
        }
        tabsArray[targetIndex].focus();
        activateTab(tabsArray[targetIndex]);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        targetIndex = currentIndex + 1;
        if (targetIndex >= tabsArray.length) {
          targetIndex = 0;
        }
        tabsArray[targetIndex].focus();
        activateTab(tabsArray[targetIndex]);
        break;

      case 'Home':
        event.preventDefault();
        tabsArray[0].focus();
        activateTab(tabsArray[0]);
        break;

      case 'End':
        event.preventDefault();
        tabsArray[tabsArray.length - 1].focus();
        activateTab(tabsArray[tabsArray.length - 1]);
        break;
    }
  }

  /**
   * Handle URL hash changes for direct linking to tabs
   */
  function handleHashChange() {
    var hash = window.location.hash.slice(1);
    if (!hash) return;

    // Find the tab with matching data-tab attribute
    var targetTab = document.querySelector('[' + ATTRIBUTES.tabId + '="' + hash + '"]');
    if (targetTab) {
      activateTab(targetTab, false);

      // Scroll the tab into view if needed
      targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  /**
   * Programmatically switch to a tab by its ID
   * @param {string} tabId - The ID of the tab to activate
   * @returns {boolean} - Whether the tab was found and activated
   */
  function switchToTab(tabId) {
    var tab = document.querySelector('[' + ATTRIBUTES.tabId + '="' + tabId + '"]');
    if (tab) {
      activateTab(tab);
      return true;
    }
    return false;
  }

  /**
   * Get the currently active tab ID
   * @param {HTMLElement} tabContainer - Optional specific tab container to check
   * @returns {string|null} - The ID of the active tab, or null if none found
   */
  function getActiveTabId(tabContainer) {
    var container = tabContainer || document;
    var activeTab = container.querySelector(SELECTORS.activeTab);
    if (activeTab) {
      return activeTab.getAttribute(ATTRIBUTES.tabId);
    }
    return null;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabs);
  } else {
    initTabs();
  }

  // Expose public API
  window.TabNavigation = {
    init: initTabs,
    switchToTab: switchToTab,
    getActiveTabId: getActiveTabId
  };

})();
