

package services;

import java.util.ArrayList;
import java.util.List;

public class CalculatorService {

    private String display;
    private List<Button> buttons;
    private Menu menu;

    public CalculatorService() {
        this.display = "";
        this.buttons = new ArrayList<>();
        this.menu = new Menu();
    }

    public JSON initializeUI() {
        display = "";
        buttons = new ArrayList<>();
        menu = new Menu();

        display = "0";

        buttons.add(new Button("button-0", "0"));
        buttons.add(new Button("button-1", "1"));
        buttons.add(new Button("button-2", "2"));
        buttons.add(new Button("button-3", "3"));
        buttons.add(new Button("button-4", "4"));
        buttons.add(new Button("button-5", "5"));
        buttons.add(new Button("button-6", "6"));
        buttons.add(new Button("button-7", "7"));
        buttons.add(new Button("button-8", "8"));
        buttons.add(new Button("button-9", "9"));

        menu.addItem("menu-item-1", "Menu Item 1");
        menu.addItem("menu-item-2", "Menu Item 2");
        menu.addItem("menu-item-3", "Menu Item 3");

        return new JSON(display, buttons, menu);
    }

    public void handleButtonClick(String value) {
        display += value;
    }

    public static class Button {
        private String id;
        private String value;

        public Button(String id, String value) {
            this.id = id;
            this.value = value;
        }

        public String getId() {
            return id;
        }

        public String getValue() {
            return value;
        }
    }

    public static class Menu {
        private List<MenuItem> items;

        public Menu() {
            this.items = new ArrayList<>();
        }

        public void addItem(String key, String value) {
            items.add(new MenuItem(key, value));
        }
    }

    public static class MenuItem {
        private String key;
        private String value;

        public MenuItem(String key, String value) {
            this.key = key;
            this.value = value;
        }

        public String getKey() {
            return key;
        }

        public String getValue() {
            return value;
        }
    }

    public static class JSON {
        private String display;
        private List<Button> buttons;
        private Menu menu;

        public JSON(String display, List<Button> buttons, Menu menu) {
            this.display = display;
            this.buttons = buttons;
            this.menu = menu;
        }

        public String getDisplay() {
            return display;
        }

        public List<Button> getButtons() {
            return buttons;
        }

        public Menu getMenu() {
            return menu;
        }
    }
}