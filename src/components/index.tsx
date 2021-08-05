import { ReactWrapper } from 'yonui-extension';

import Calender from './calendar/index';
import CalenderManifest from './calendar/manifest';
import TimeRange from './date-panel-picker-2/index';
import TimeRangeManifest from './date-panel-picker-2/manifest';
import NavBar from './navbar/index';
import NavBarManifest from './navbar/manifest';
import CalenderPanel from './calendar-panel/index';
import CalenderPanelManifest from './calendar-panel/manifest';
import TimeRangePicker from './time-range-picker/index';
import TimeRangePickerManifest from './time-range-picker/manifest';
import Button from './button/index';
import ButtonManifest from './button/manifest';
import Icon from './icon/index';
import IconManifest from './icon/manifest';
import Carousel from './carousel/index';
import CarouselManifest from './carousel/manifest';
import CarouselItem from './carousel-item/index';
import CarouselItemManifest from './carousel-item/manifest';
import Divider from './divider/index';
import DividerManifest from './divider/manifest';
import Search from './Search/index';
import SearchManifest from './Search/manifest';
import Flex from './flex/index';
import FlexManifest from './flex/manifest';
import Result from './result/index';
import ResultManifest from './result/manifest';
import Empty from './empty/index';
import EmptyManifest from './empty/manifest';
import Tips from './tips/index';
import TipsManifest from './tips/manifest';
import Label from './label/index';
import LabelManifest from './label/manifest';
import Div from './div/index';
import DivManifest from './div/manifest';
import ListView from './list-view/index';
import ListViewManifest from './list-view/manifest';
import Notice from './notice/index';
import NoticeManifest from './notice/manifest';
import PopoverControl from './popover/index';
import PopoverControlManifest from './popover/manifest';
import Radio from './radio/index';
import RadioManifest from './radio/manifest';
import Slider from './slider/index';
import SliderManifest from './slider/manifest';
import Switch from './switch/index';
import SwitchManifest from './switch/manifest';
import Menu from './menu/index';
import MenuManifest from './menu/manifest';
import Checkbox from './checkbox/index';
import CheckboxManifest from './checkbox/manifest';
import TabPane from './tab-pane/index';
import TabPaneManifest from './tab-pane/manifest';
import ToolBar from './tool-bar-box/index';
import ToolBarManifest from './tool-bar-box/manifest';
import SharePanel from './share-panel/index';
import SharePanelManifest from './share-panel/manifest';
import Loading from './loading/index';
import LoadingManifest from './loading/manifest';
import Grid from './grid/index';
import GridManifest from './grid/manifest';
import Textarea from './textarea-item/index';
import TextareaManifest from './textarea-item/manifest';
import Input from './input/index';
import InputManifest from './input/manifest';
import Footer from './footer/index';
import FooterManifest from './footer/manifest';
import ListPanelPicker from './list-panel-picker/index';
import ListPanelPickerManifest from './list-panel-picker/manifest';
import CardBox from './card-box/index';
import CardBoxManifest from './card-box/manifest';
import CardBoxGroup from './card-box-group/index';
import CardBoxGroupManifest from './card-box-group/manifest';
import DateTimePicker from './date-time-picker/index';
import DateTimePickerManifest from './date-time-picker/manifest';
import DateTimeRange from './date-time-range/index';
import DateTimeRangeManifest from './date-time-range/manifest';
import InputNumber from './input-number/index';
import InputNumberManifest from './input-number/manifest';
import TabBar from './tab-bar/index';
import TabBarManifest from './tab-bar/manifest';
import SimpleList from './simple-list/index';
import SimpleListManifest from './simple-list/manifest';
import Mobile from './contact/index';
import MobileManifest from './contact/manifest';
import Toast from './toast/index';
import ToastManifest from './toast/manifest';
import YonuiIframe from './yonui-iframe/index';
import YonuiIframeManifest from './yonui-iframe/manifest';
import ListItemDisplay from './list-item-display/index';
import ListItemDisplayManifest from './list-item-display/manifest';
import Rate from './rate/index';
import RateManifest from './rate/manifest';
import GroupContainer from './main-vice-group/index';
import GroupContainerManifest from './main-vice-group/manifest';
import GroupRefer from './group-refer/index';
import GroupReferManifest from './group-refer/manifest';
import Noticebar from './noticebar/index';
import NoticebarManifest from './noticebar/manifest';

const CalenderComp = ReactWrapper(Calender, CalenderManifest)
const TimeRangeComp = ReactWrapper(TimeRange, TimeRangeManifest)
const NavBarComp = ReactWrapper(NavBar, NavBarManifest)
const CalenderPanelComp = ReactWrapper(CalenderPanel, CalenderPanelManifest)
const TimeRangePickerComp = ReactWrapper(TimeRangePicker, TimeRangePickerManifest)
const TabBottomComp = ReactWrapper(TabBar, TabBarManifest)
const ButtonComp = ReactWrapper(Button, ButtonManifest)
const IconComp = ReactWrapper(Icon, IconManifest)
const CarouselComp = ReactWrapper(Carousel, CarouselManifest)
const CarouselItemComp = ReactWrapper(CarouselItem, CarouselItemManifest)
const DividerComp = ReactWrapper(Divider, DividerManifest)
const SearchComp = ReactWrapper(Search, SearchManifest)
const FlexComp = ReactWrapper(Flex, FlexManifest)
const ResultComp = ReactWrapper(Result, ResultManifest)
const EmptyComp = ReactWrapper(Empty, EmptyManifest)
const TipsComp = ReactWrapper(Tips, TipsManifest)
const LabelComp = ReactWrapper(Label, LabelManifest)
const DivComp = ReactWrapper(Div, DivManifest)
const ListViewComp = ReactWrapper(ListView, ListViewManifest)
const NoticeComp = ReactWrapper(Notice, NoticeManifest)
const PopoverControlComp = ReactWrapper(PopoverControl, PopoverControlManifest)
const RadioComp = ReactWrapper(Radio, RadioManifest)
const SliderComp = ReactWrapper(Slider, SliderManifest)
const SwitchComp = ReactWrapper(Switch, SwitchManifest)
const MenuComp = ReactWrapper(Menu, MenuManifest)
const CheckboxComp = ReactWrapper(Checkbox, CheckboxManifest)
const TabPaneComp = ReactWrapper(TabPane, TabPaneManifest)
const ToolBarComp = ReactWrapper(ToolBar, ToolBarManifest)
const SharePanelComp = ReactWrapper(SharePanel, SharePanelManifest)
const LoadingComp = ReactWrapper(Loading, LoadingManifest)
const GridComp = ReactWrapper(Grid, GridManifest)
const TextareaComp = ReactWrapper(Textarea, TextareaManifest)
const InputComp = ReactWrapper(Input, InputManifest)
const FooterComp = ReactWrapper(Footer, FooterManifest)
const ListPanelPickerComp = ReactWrapper(ListPanelPicker, ListPanelPickerManifest)
const CardBoxComp = ReactWrapper(CardBox, CardBoxManifest)
const CardBoxGroupComp = ReactWrapper(CardBoxGroup, CardBoxGroupManifest)
const DateTimePickerComp = ReactWrapper(DateTimePicker, DateTimePickerManifest)
const DateTimeRangeComp = ReactWrapper(DateTimeRange, DateTimeRangeManifest)
const InputNumberComp = ReactWrapper(InputNumber, InputNumberManifest)
const TabBarComp = ReactWrapper(TabBar, TabBarManifest)
const SimpleListComp = ReactWrapper(SimpleList, SimpleListManifest)
const MobileComp = ReactWrapper(Mobile, MobileManifest)
const ToastComp = ReactWrapper(Toast, ToastManifest)
const YonuiIframeComp = ReactWrapper(YonuiIframe, YonuiIframeManifest)
const ListItemDisplayComp = ReactWrapper(ListItemDisplay, ListItemDisplayManifest)
const RateComp = ReactWrapper(Rate, RateManifest)
const GroupContainerComp = ReactWrapper(GroupContainer, GroupContainerManifest)
const GroupReferComp = ReactWrapper(GroupRefer, GroupReferManifest)
const NoticebarComp = ReactWrapper(Noticebar, NoticebarManifest)

export { CalenderComp as Calender };
export { TimeRangeComp as TimeRange };
export { default as Table } from './table/index';
export { NavBarComp as NavBar };
export { CalenderPanelComp as CalenderPanel };
export { TimeRangePickerComp as TimeRangePicker };
export { TabBottomComp as TabBottom };
export { ButtonComp as Button };
export { IconComp as Icon };
export { CarouselComp as Carousel };
export { CarouselItemComp as CarouselItem };
export { DividerComp as Divider };
export { SearchComp as Search };
export { FlexComp as Flex };
export { ResultComp as Result };
export { EmptyComp as Empty };
export { TipsComp as Tips };
export { LabelComp as Label };
export { DivComp as Div };
export { ListViewComp as ListView };
export { NoticeComp as Notice };
export { PopoverControlComp as PopoverControl };
export { RadioComp as Radio };
export { SliderComp as Slider };
export { SwitchComp as Switch };
export { MenuComp as Menu };
export { CheckboxComp as Checkbox };
export { default as Tab } from './tab/index';
export { TabPaneComp as TabPane };
export { ToolBarComp as ToolBar };
export { SharePanelComp as SharePanel };
export { LoadingComp as Loading };
export { GridComp as Grid };
export { TextareaComp as Textarea };
export { InputComp as Input };
export { default as InputBox } from './input-yonui/index';
export { FooterComp as Footer };
export { ListPanelPickerComp as ListPanelPicker };
export { CardBoxComp as CardBox };
export { CardBoxGroupComp as CardBoxGroup };
export { DateTimePickerComp as DateTimePicker };
export { DateTimeRangeComp as DateTimeRange };
export { InputNumberComp as InputNumber };
export { default as ListItemWrapper } from './list-item-wrapper/index';
export { TabBarComp as TabBar };
export { SimpleListComp as SimpleList };
export { MobileComp as Mobile };
export { ToastComp as Toast };
export { YonuiIframeComp as YonuiIframe };
export { ListItemDisplayComp as ListItemDisplay };
export { RateComp as Rate };
export { GroupContainerComp as GroupContainer };
export { GroupReferComp as GroupRefer };
export { NoticebarComp as Noticebar };
