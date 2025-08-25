import type React from 'react';

import type { VariantProps } from 'class-variance-authority';

import Activity from '@untitled-ui/icons-react/build/esm/Activity.js';
import ActivityHeart from '@untitled-ui/icons-react/build/esm/ActivityHeart.js';
import Airplay from '@untitled-ui/icons-react/build/esm/Airplay.js';
import AlarmClock from '@untitled-ui/icons-react/build/esm/AlarmClock.js';
import AlertCircle from '@untitled-ui/icons-react/build/esm/AlertCircle.js';
import Anchor from '@untitled-ui/icons-react/build/esm/Anchor.js';
// Communication icons
import Annotation from '@untitled-ui/icons-react/build/esm/Annotation.js';
import AnnotationAlert from '@untitled-ui/icons-react/build/esm/AnnotationAlert.js';
import AnnotationCheck from '@untitled-ui/icons-react/build/esm/AnnotationCheck.js';
import AnnotationDots from '@untitled-ui/icons-react/build/esm/AnnotationDots.js';
import AnnotationHeart from '@untitled-ui/icons-react/build/esm/AnnotationHeart.js';
import AnnotationInfo from '@untitled-ui/icons-react/build/esm/AnnotationInfo.js';
import AnnotationPlus from '@untitled-ui/icons-react/build/esm/AnnotationPlus.js';
import AnnotationQuestion from '@untitled-ui/icons-react/build/esm/AnnotationQuestion.js';
import AnnotationX from '@untitled-ui/icons-react/build/esm/AnnotationX.js';
import Announcement01 from '@untitled-ui/icons-react/build/esm/Announcement01.js';
import Archive from '@untitled-ui/icons-react/build/esm/Archive.js';
import ArrowBlockDown from '@untitled-ui/icons-react/build/esm/ArrowBlockDown.js';
import ArrowBlockLeft from '@untitled-ui/icons-react/build/esm/ArrowBlockLeft.js';
import ArrowBlockRight from '@untitled-ui/icons-react/build/esm/ArrowBlockRight.js';
import ArrowBlockUp from '@untitled-ui/icons-react/build/esm/ArrowBlockUp.js';
import ArrowCircleBrokenDown from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenDown.js';
import ArrowCircleBrokenDownLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenDownLeft.js';
import ArrowCircleBrokenDownRight from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenDownRight.js';
import ArrowCircleBrokenLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenLeft.js';
import ArrowCircleBrokenRight from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenRight.js';
import ArrowCircleBrokenUp from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenUp.js';
import ArrowCircleBrokenUpLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenUpLeft.js';
import ArrowCircleBrokenUpRight from '@untitled-ui/icons-react/build/esm/ArrowCircleBrokenUpRight.js';
import ArrowCircleDown from '@untitled-ui/icons-react/build/esm/ArrowCircleDown.js';
// Additional new icons
import ArrowCircleDownLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleDownLeft.js';
import ArrowCircleDownRight from '@untitled-ui/icons-react/build/esm/ArrowCircleDownRight.js';
import ArrowCircleLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleLeft.js';
import ArrowCircleRight from '@untitled-ui/icons-react/build/esm/ArrowCircleRight.js';
import ArrowCircleUp from '@untitled-ui/icons-react/build/esm/ArrowCircleUp.js';
import ArrowCircleUpLeft from '@untitled-ui/icons-react/build/esm/ArrowCircleUpLeft.js';
import ArrowCircleUpRight from '@untitled-ui/icons-react/build/esm/ArrowCircleUpRight.js';
import ArrowDownLeft from '@untitled-ui/icons-react/build/esm/ArrowDownLeft.js';
import ArrowDownRight from '@untitled-ui/icons-react/build/esm/ArrowDownRight.js';
import ArrowNarrowDown from '@untitled-ui/icons-react/build/esm/ArrowNarrowDown.js';
import ArrowNarrowDownLeft from '@untitled-ui/icons-react/build/esm/ArrowNarrowDownLeft.js';
import ArrowNarrowDownRight from '@untitled-ui/icons-react/build/esm/ArrowNarrowDownRight.js';
import ArrowNarrowLeft from '@untitled-ui/icons-react/build/esm/ArrowNarrowLeft.js';
import ArrowNarrowRight from '@untitled-ui/icons-react/build/esm/ArrowNarrowRight.js';
import ArrowNarrowUp from '@untitled-ui/icons-react/build/esm/ArrowNarrowUp.js';
import ArrowNarrowUpLeft from '@untitled-ui/icons-react/build/esm/ArrowNarrowUpLeft.js';
import ArrowNarrowUpRight from '@untitled-ui/icons-react/build/esm/ArrowNarrowUpRight.js';
import ArrowsDown from '@untitled-ui/icons-react/build/esm/ArrowsDown.js';
import ArrowsLeft from '@untitled-ui/icons-react/build/esm/ArrowsLeft.js';
import ArrowSquareDown from '@untitled-ui/icons-react/build/esm/ArrowSquareDown.js';
import ArrowSquareDownLeft from '@untitled-ui/icons-react/build/esm/ArrowSquareDownLeft.js';
import ArrowSquareDownRight from '@untitled-ui/icons-react/build/esm/ArrowSquareDownRight.js';
import ArrowSquareLeft from '@untitled-ui/icons-react/build/esm/ArrowSquareLeft.js';
import ArrowSquareRight from '@untitled-ui/icons-react/build/esm/ArrowSquareRight.js';
import ArrowSquareUp from '@untitled-ui/icons-react/build/esm/ArrowSquareUp.js';
import ArrowSquareUpLeft from '@untitled-ui/icons-react/build/esm/ArrowSquareUpLeft.js';
import ArrowSquareUpRight from '@untitled-ui/icons-react/build/esm/ArrowSquareUpRight.js';
import ArrowsTriangle from '@untitled-ui/icons-react/build/esm/ArrowsTriangle.js';
import ArrowsUp from '@untitled-ui/icons-react/build/esm/ArrowsUp.js';
import ArrowUpLeft from '@untitled-ui/icons-react/build/esm/ArrowUpLeft.js';
import ArrowUpRight from '@untitled-ui/icons-react/build/esm/ArrowUpRight.js';
import Asterisk01 from '@untitled-ui/icons-react/build/esm/Asterisk01.js';
import Asterisk02 from '@untitled-ui/icons-react/build/esm/Asterisk02.js';
import AtSign from '@untitled-ui/icons-react/build/esm/AtSign.js';
import Attachment02 from '@untitled-ui/icons-react/build/esm/Attachment02.js';
import Award02 from '@untitled-ui/icons-react/build/esm/Award02.js';
import BarChart01 from '@untitled-ui/icons-react/build/esm/BarChart01.js';
import BarChart02 from '@untitled-ui/icons-react/build/esm/BarChart02.js';
import BarChart03 from '@untitled-ui/icons-react/build/esm/BarChart03.js';
import BarChart04 from '@untitled-ui/icons-react/build/esm/BarChart04.js';
import BarChart05 from '@untitled-ui/icons-react/build/esm/BarChart05.js';
import BarChart06 from '@untitled-ui/icons-react/build/esm/BarChart06.js';
import BarChart07 from '@untitled-ui/icons-react/build/esm/BarChart07.js';
import BarChart08 from '@untitled-ui/icons-react/build/esm/BarChart08.js';
import BarChart09 from '@untitled-ui/icons-react/build/esm/BarChart09.js';
import BarChart10 from '@untitled-ui/icons-react/build/esm/BarChart10.js';
import BarChart11 from '@untitled-ui/icons-react/build/esm/BarChart11.js';
import BarChart12 from '@untitled-ui/icons-react/build/esm/BarChart12.js';
import BarChartCircle01 from '@untitled-ui/icons-react/build/esm/BarChartCircle01.js';
import BarChartCircle02 from '@untitled-ui/icons-react/build/esm/BarChartCircle02.js';
import BarChartCircle03 from '@untitled-ui/icons-react/build/esm/BarChartCircle03.js';
import BarChartSquare01 from '@untitled-ui/icons-react/build/esm/BarChartSquare01.js';
import BarChartSquare02 from '@untitled-ui/icons-react/build/esm/BarChartSquare02.js';
import BarChartSquareDown from '@untitled-ui/icons-react/build/esm/BarChartSquareDown.js';
import BarChartSquareMinus from '@untitled-ui/icons-react/build/esm/BarChartSquareMinus.js';
import BarChartSquarePlus from '@untitled-ui/icons-react/build/esm/BarChartSquarePlus.js';
import BarChartSquareUp from '@untitled-ui/icons-react/build/esm/BarChartSquareUp.js';
import BarLineChart from '@untitled-ui/icons-react/build/esm/BarLineChart.js';
import Beaker01 from '@untitled-ui/icons-react/build/esm/Beaker01.js';
import BluetoothOff from '@untitled-ui/icons-react/build/esm/BluetoothOff.js';
import BluetoothOn from '@untitled-ui/icons-react/build/esm/BluetoothOn.js';
import BoldSquare from '@untitled-ui/icons-react/build/esm/BoldSquare.js';
import Bookmark from '@untitled-ui/icons-react/build/esm/Bookmark.js';
import BookmarkAdd from '@untitled-ui/icons-react/build/esm/BookmarkAdd.js';
import BookmarkCheck from '@untitled-ui/icons-react/build/esm/BookmarkCheck.js';
import BookmarkMinus from '@untitled-ui/icons-react/build/esm/BookmarkMinus.js';
import BookmarkX from '@untitled-ui/icons-react/build/esm/BookmarkX.js';
import BookOpen01 from '@untitled-ui/icons-react/build/esm/BookOpen01.js';
import Building01 from '@untitled-ui/icons-react/build/esm/Building01.js';
import Building02 from '@untitled-ui/icons-react/build/esm/Building02.js';
import Calculator from '@untitled-ui/icons-react/build/esm/Calculator.js';
import CalendarDate from '@untitled-ui/icons-react/build/esm/CalendarDate.js';
import Camera01 from '@untitled-ui/icons-react/build/esm/Camera01.js';
import ChartBreakoutCircle from '@untitled-ui/icons-react/build/esm/ChartBreakoutCircle.js';
import ChartBreakoutSquare from '@untitled-ui/icons-react/build/esm/ChartBreakoutSquare.js';
import CheckCircle from '@untitled-ui/icons-react/build/esm/CheckCircle.js';
import ChevronDownDouble from '@untitled-ui/icons-react/build/esm/ChevronDownDouble.js';
import ChevronLeftDouble from '@untitled-ui/icons-react/build/esm/ChevronLeftDouble.js';
import ChevronRightDouble from '@untitled-ui/icons-react/build/esm/ChevronRightDouble.js';
import ChevronSelectorHorizontal from '@untitled-ui/icons-react/build/esm/ChevronSelectorHorizontal.js';
import ChevronSelectorVertical from '@untitled-ui/icons-react/build/esm/ChevronSelectorVertical.js';
import ChevronUpDouble from '@untitled-ui/icons-react/build/esm/ChevronUpDouble.js';
import ChromeCast from '@untitled-ui/icons-react/build/esm/ChromeCast.js';
import ClockRewind from '@untitled-ui/icons-react/build/esm/ClockRewind.js';
import CodeBrowser from '@untitled-ui/icons-react/build/esm/CodeBrowser.js';
import Colors from '@untitled-ui/icons-react/build/esm/Colors.js';
import Command from '@untitled-ui/icons-react/build/esm/Command.js';
import Compass01 from '@untitled-ui/icons-react/build/esm/Compass01.js';
import CursorBox from '@untitled-ui/icons-react/build/esm/CursorBox.js';
import CursorClick01 from '@untitled-ui/icons-react/build/esm/CursorClick01.js';
import Data from '@untitled-ui/icons-react/build/esm/Data.js';
import Database01 from '@untitled-ui/icons-react/build/esm/Database01.js';
import Dataflow03 from '@untitled-ui/icons-react/build/esm/Dataflow03.js';
import Dotpoints02 from '@untitled-ui/icons-react/build/esm/Dotpoints02.js';
import Download04 from '@untitled-ui/icons-react/build/esm/Download04.js';
import DownloadCloud01 from '@untitled-ui/icons-react/build/esm/DownloadCloud01.js';
import DownloadCloud02 from '@untitled-ui/icons-react/build/esm/DownloadCloud02.js';
import Dropper from '@untitled-ui/icons-react/build/esm/Dropper.js';
import Edit01 from '@untitled-ui/icons-react/build/esm/Edit01.js';
import Edit02 from '@untitled-ui/icons-react/build/esm/Edit02.js';
import Edit03 from '@untitled-ui/icons-react/build/esm/Edit03.js';
import Edit04 from '@untitled-ui/icons-react/build/esm/Edit04.js';
import Equal from '@untitled-ui/icons-react/build/esm/Equal.js';
import EqualNot from '@untitled-ui/icons-react/build/esm/EqualNot.js';
import Eraser from '@untitled-ui/icons-react/build/esm/Eraser.js';
import Expand01 from '@untitled-ui/icons-react/build/esm/Expand01.js';
import Expand02 from '@untitled-ui/icons-react/build/esm/Expand02.js';
import Expand03 from '@untitled-ui/icons-react/build/esm/Expand03.js';
import Expand04 from '@untitled-ui/icons-react/build/esm/Expand04.js';
import Expand05 from '@untitled-ui/icons-react/build/esm/Expand05.js';
import Expand06 from '@untitled-ui/icons-react/build/esm/Expand06.js';
// Users
import FaceContent from '@untitled-ui/icons-react/build/esm/FaceContent.js';
import FaceFrown from '@untitled-ui/icons-react/build/esm/FaceFrown.js';
import FaceHappy from '@untitled-ui/icons-react/build/esm/FaceHappy.js';
import Faceid from '@untitled-ui/icons-react/build/esm/FaceId.js';
import FaceNeutral from '@untitled-ui/icons-react/build/esm/FaceNeutral.js';
import FaceSad from '@untitled-ui/icons-react/build/esm/FaceSad.js';
import FaceSmile from '@untitled-ui/icons-react/build/esm/FaceSmile.js';
import FaceWink from '@untitled-ui/icons-react/build/esm/FaceWink.js';
import File02 from '@untitled-ui/icons-react/build/esm/File02.js';
import FileQuestion01 from '@untitled-ui/icons-react/build/esm/FileQuestion01.js';
import Film03 from '@untitled-ui/icons-react/build/esm/Film03.js';
import FilterFunnel01 from '@untitled-ui/icons-react/build/esm/FilterFunnel01.js';
import FilterFunnel02 from '@untitled-ui/icons-react/build/esm/FilterFunnel02.js';
import Flag01 from '@untitled-ui/icons-react/build/esm/Flag01.js';
import FlexAlignLeft from '@untitled-ui/icons-react/build/esm/FlexAlignLeft.js';
import FlexAlignRight from '@untitled-ui/icons-react/build/esm/FlexAlignRight.js';
import FlexAlignTop from '@untitled-ui/icons-react/build/esm/FlexAlignTop.js';
import FlipBackward from '@untitled-ui/icons-react/build/esm/FlipBackward.js';
import FlipForward from '@untitled-ui/icons-react/build/esm/FlipForward.js';
import FolderPlus from '@untitled-ui/icons-react/build/esm/FolderPlus.js';
import GamingPad01 from '@untitled-ui/icons-react/build/esm/GamingPad01.js';
import Gift01 from '@untitled-ui/icons-react/build/esm/Gift01.js';
import GitBranch02 from '@untitled-ui/icons-react/build/esm/GitBranch02.js';
import Glasses01 from '@untitled-ui/icons-react/build/esm/Glasses01.js';
import GoogleChrome from '@untitled-ui/icons-react/build/esm/GoogleChrome.js';
import Hash02 from '@untitled-ui/icons-react/build/esm/Hash02.js';
import Heading02 from '@untitled-ui/icons-react/build/esm/Heading02.js';
import Heart from '@untitled-ui/icons-react/build/esm/Heart.js';
import Home02 from '@untitled-ui/icons-react/build/esm/Home02.js';
import HorizontalBarChart01 from '@untitled-ui/icons-react/build/esm/HorizontalBarChart01.js';
import HorizontalBarChart02 from '@untitled-ui/icons-react/build/esm/HorizontalBarChart02.js';
import HorizontalBarChart03 from '@untitled-ui/icons-react/build/esm/HorizontalBarChart03.js';
import Image01 from '@untitled-ui/icons-react/build/esm/Image01.js';
import ImagePlus from '@untitled-ui/icons-react/build/esm/ImagePlus.js';
import InfinityIcon from '@untitled-ui/icons-react/build/esm/Infinity.js';
import IntersectSquare from '@untitled-ui/icons-react/build/esm/IntersectSquare.js';
import ItalicSquare from '@untitled-ui/icons-react/build/esm/ItalicSquare.js';
import Key01 from '@untitled-ui/icons-react/build/esm/Key01.js';
import Keyboard02 from '@untitled-ui/icons-react/build/esm/Keyboard02.js';
import Laptop02 from '@untitled-ui/icons-react/build/esm/Laptop02.js';
import LayersThree02 from '@untitled-ui/icons-react/build/esm/LayersThree02.js';
import LayersTwo02 from '@untitled-ui/icons-react/build/esm/LayersTwo02.js';
import LayoutAlt02 from '@untitled-ui/icons-react/build/esm/LayoutAlt02.js';
import LeftIndent01 from '@untitled-ui/icons-react/build/esm/LeftIndent01.js';
import Lightbulb02 from '@untitled-ui/icons-react/build/esm/Lightbulb02.js';
import LineChartDown01 from '@untitled-ui/icons-react/build/esm/LineChartDown01.js';
import LineChartDown02 from '@untitled-ui/icons-react/build/esm/LineChartDown02.js';
import LineChartDown03 from '@untitled-ui/icons-react/build/esm/LineChartDown03.js';
import LineChartDown04 from '@untitled-ui/icons-react/build/esm/LineChartDown04.js';
import LineChartDown05 from '@untitled-ui/icons-react/build/esm/LineChartDown05.js';
import LineChartUp01 from '@untitled-ui/icons-react/build/esm/LineChartUp01.js';
import LineChartUp02 from '@untitled-ui/icons-react/build/esm/LineChartUp02.js';
import LineChartUp03 from '@untitled-ui/icons-react/build/esm/LineChartUp03.js';
import LineChartUp04 from '@untitled-ui/icons-react/build/esm/LineChartUp04.js';
import LineChartUp05 from '@untitled-ui/icons-react/build/esm/LineChartUp05.js';
import Link01 from '@untitled-ui/icons-react/build/esm/Link01.js';
import LinkBroken01 from '@untitled-ui/icons-react/build/esm/LinkBroken01.js';
import LinkBroken02 from '@untitled-ui/icons-react/build/esm/LinkBroken02.js';
import LinkExternal01 from '@untitled-ui/icons-react/build/esm/LinkExternal01.js';
import LinkExternal02 from '@untitled-ui/icons-react/build/esm/LinkExternal02.js';
import Loading01 from '@untitled-ui/icons-react/build/esm/Loading01.js';
import Loading02 from '@untitled-ui/icons-react/build/esm/Loading02.js';
import Loading03 from '@untitled-ui/icons-react/build/esm/Loading03.js';
import Lock01 from '@untitled-ui/icons-react/build/esm/Lock01.js';
import LogIn01 from '@untitled-ui/icons-react/build/esm/LogIn01.js';
import LogIn02 from '@untitled-ui/icons-react/build/esm/LogIn02.js';
import LogIn03 from '@untitled-ui/icons-react/build/esm/LogIn03.js';
import LogOut01 from '@untitled-ui/icons-react/build/esm/LogOut01.js';
import LogOut02 from '@untitled-ui/icons-react/build/esm/LogOut02.js';
import LogOut03 from '@untitled-ui/icons-react/build/esm/LogOut03.js';
import LogOut04 from '@untitled-ui/icons-react/build/esm/LogOut04.js';
import MagicWand02 from '@untitled-ui/icons-react/build/esm/MagicWand02.js';  
import Mail01 from '@untitled-ui/icons-react/build/esm/Mail01.js';
import Mail02 from '@untitled-ui/icons-react/build/esm/Mail02.js';
import Mail03 from '@untitled-ui/icons-react/build/esm/Mail03.js';
import Mail04 from '@untitled-ui/icons-react/build/esm/Mail04.js';
import Mail05 from '@untitled-ui/icons-react/build/esm/Mail05.js';
import MessageAlertCircle from '@untitled-ui/icons-react/build/esm/MessageAlertCircle.js';
import MessageAlertSquare from '@untitled-ui/icons-react/build/esm/MessageAlertSquare.js';
import MessageChatCircle from '@untitled-ui/icons-react/build/esm/MessageChatCircle.js';
import MessageChatSquare from '@untitled-ui/icons-react/build/esm/MessageChatSquare.js';
import MessageCheckCircle from '@untitled-ui/icons-react/build/esm/MessageCheckCircle.js';
import MessageCheckSquare from '@untitled-ui/icons-react/build/esm/MessageCheckSquare.js';
import MessageCircle01 from '@untitled-ui/icons-react/build/esm/MessageCircle01.js';
import MessageCircle02 from '@untitled-ui/icons-react/build/esm/MessageCircle02.js';
import MessageDotsCircle from '@untitled-ui/icons-react/build/esm/MessageDotsCircle.js';
import MessageDotsSquare from '@untitled-ui/icons-react/build/esm/MessageDotsSquare.js';
import MessageHeartCircle from '@untitled-ui/icons-react/build/esm/MessageHeartCircle.js';
import MessageHeartSquare from '@untitled-ui/icons-react/build/esm/MessageHeartSquare.js';
import MessageNotificationSquare from '@untitled-ui/icons-react/build/esm/MessageNotificationSquare.js';
import MessagePlusCircle from '@untitled-ui/icons-react/build/esm/MessagePlusCircle.js';
import MessagePlusSquare from '@untitled-ui/icons-react/build/esm/MessagePlusSquare.js';
import MessageQuestionCircle from '@untitled-ui/icons-react/build/esm/MessageQuestionCircle.js';
import MessageQuestionSquare from '@untitled-ui/icons-react/build/esm/MessageQuestionSquare.js';
import MessageSmileCircle from '@untitled-ui/icons-react/build/esm/MessageSmileCircle.js';
import MessageSmileSquare from '@untitled-ui/icons-react/build/esm/MessageSmileSquare.js';
import MessageSquare01 from '@untitled-ui/icons-react/build/esm/MessageSquare01.js';
import MessageSquare02 from '@untitled-ui/icons-react/build/esm/MessageSquare02.js';
import MessageTextCircle01 from '@untitled-ui/icons-react/build/esm/MessageTextCircle01.js';
import MessageTextCircle02 from '@untitled-ui/icons-react/build/esm/MessageTextCircle02.js';
import MessageTextSquare01 from '@untitled-ui/icons-react/build/esm/MessageTextSquare01.js';
import MessageTextSquare02 from '@untitled-ui/icons-react/build/esm/MessageTextSquare02.js';
import MessageXCircle from '@untitled-ui/icons-react/build/esm/MessageXCircle.js';
import MessageXSquare from '@untitled-ui/icons-react/build/esm/MessageXSquare.js';
import Microphone01 from '@untitled-ui/icons-react/build/esm/Microphone01.js';
import Microphone02 from '@untitled-ui/icons-react/build/esm/Microphone02.js';
import MicrophoneOff01 from '@untitled-ui/icons-react/build/esm/MicrophoneOff01.js';
import Minimize02 from '@untitled-ui/icons-react/build/esm/Minimize02.js';
import Monitor02 from '@untitled-ui/icons-react/build/esm/Monitor02.js';
import Move from '@untitled-ui/icons-react/build/esm/Move.js';
import NotificationMessage from '@untitled-ui/icons-react/build/esm/NotificationMessage.js';
import Palette from '@untitled-ui/icons-react/build/esm/Palette.js';
import ParagraphSpacing from '@untitled-ui/icons-react/build/esm/ParagraphSpacing.js';
import ParagraphWrap from '@untitled-ui/icons-react/build/esm/ParagraphWrap.js';
import PauseSquare from '@untitled-ui/icons-react/build/esm/PauseSquare.js';
import PencilLine from '@untitled-ui/icons-react/build/esm/PencilLine.js';
import PenTool02 from '@untitled-ui/icons-react/build/esm/PenTool02.js';
import PenToolPlus from '@untitled-ui/icons-react/build/esm/PenToolPlus.js';
import Phone01 from '@untitled-ui/icons-react/build/esm/Phone01.js';
import Phone from '@untitled-ui/icons-react/build/esm/Phone.js';
import PhoneCall01 from '@untitled-ui/icons-react/build/esm/PhoneCall01.js';
import PhoneCall02 from '@untitled-ui/icons-react/build/esm/PhoneCall02.js';
import PhoneIncoming01 from '@untitled-ui/icons-react/build/esm/PhoneIncoming01.js';
import PhoneIncoming02 from '@untitled-ui/icons-react/build/esm/PhoneIncoming02.js';
import PhoneOutgoing01 from '@untitled-ui/icons-react/build/esm/PhoneOutgoing01.js';
import PhoneOutgoing02 from '@untitled-ui/icons-react/build/esm/PhoneOutgoing02.js';
import PhonePause from '@untitled-ui/icons-react/build/esm/PhonePause.js';
import PhonePlus from '@untitled-ui/icons-react/build/esm/PhonePlus.js';
import PhoneX from '@untitled-ui/icons-react/build/esm/PhoneX.js';
import PieChart01 from '@untitled-ui/icons-react/build/esm/PieChart01.js';
import PieChart02 from '@untitled-ui/icons-react/build/esm/PieChart02.js';
import PieChart03 from '@untitled-ui/icons-react/build/esm/PieChart03.js';
import PieChart04 from '@untitled-ui/icons-react/build/esm/PieChart04.js';
import PiggyBank01 from '@untitled-ui/icons-react/build/esm/PiggyBank01.js';
import Pilcrow02 from '@untitled-ui/icons-react/build/esm/Pilcrow02.js';
import Plane from '@untitled-ui/icons-react/build/esm/Plane.js';
import PlaySquare from '@untitled-ui/icons-react/build/esm/PlaySquare.js';
import PlusSquare from '@untitled-ui/icons-react/build/esm/PlusSquare.js';
import PresentationChart01 from '@untitled-ui/icons-react/build/esm/PresentationChart01.js';
import PresentationChart02 from '@untitled-ui/icons-react/build/esm/PresentationChart02.js';
import PresentationChart03 from '@untitled-ui/icons-react/build/esm/PresentationChart03.js';
import RefreshCcw01 from '@untitled-ui/icons-react/build/esm/RefreshCcw01.js';
import RefreshCcw02 from '@untitled-ui/icons-react/build/esm/RefreshCcw02.js';
import RefreshCcw03 from '@untitled-ui/icons-react/build/esm/RefreshCcw03.js';
import RefreshCcw04 from '@untitled-ui/icons-react/build/esm/RefreshCcw04.js';
import RefreshCcw05 from '@untitled-ui/icons-react/build/esm/RefreshCcw05.js';
import RefreshCw01 from '@untitled-ui/icons-react/build/esm/RefreshCw01.js';
import Repeat01 from '@untitled-ui/icons-react/build/esm/Repeat01.js';
import ReverseLeft from '@untitled-ui/icons-react/build/esm/ReverseLeft.js';
import ReverseRight from '@untitled-ui/icons-react/build/esm/ReverseRight.js';
import Rocket02 from '@untitled-ui/icons-react/build/esm/Rocket02.js';
import SearchRefraction from '@untitled-ui/icons-react/build/esm/SearchRefraction.js';
import Send01 from '@untitled-ui/icons-react/build/esm/Send01.js';
import Send02 from '@untitled-ui/icons-react/build/esm/Send02.js';
import Send03 from '@untitled-ui/icons-react/build/esm/Send03.js';
import Server01 from '@untitled-ui/icons-react/build/esm/Server01.js';
import Share05 from '@untitled-ui/icons-react/build/esm/Share05.js';
import Share06 from '@untitled-ui/icons-react/build/esm/Share06.js';
import Share07 from '@untitled-ui/icons-react/build/esm/Share07.js';
import Signal01 from '@untitled-ui/icons-react/build/esm/Signal01.js';
import Skew from '@untitled-ui/icons-react/build/esm/Skew.js';
import SlashCircle01 from '@untitled-ui/icons-react/build/esm/SlashCircle01.js';
import SlashCircle02 from '@untitled-ui/icons-react/build/esm/SlashCircle02.js';
import SlashDivider from '@untitled-ui/icons-react/build/esm/SlashDivider.js';
import SlashOctagon from '@untitled-ui/icons-react/build/esm/SlashOctagon.js';
import Sliders04 from '@untitled-ui/icons-react/build/esm/Sliders04.js';
import SpacingWidth02 from '@untitled-ui/icons-react/build/esm/SpacingWidth02.js';
import Speedometer01 from '@untitled-ui/icons-react/build/esm/Speedometer01.js';
import Speedometer02 from '@untitled-ui/icons-react/build/esm/Speedometer02.js';
import Speedometer03 from '@untitled-ui/icons-react/build/esm/Speedometer03.js';
import Stand from '@untitled-ui/icons-react/build/esm/Stand.js';
import Star07 from '@untitled-ui/icons-react/build/esm/Star07.js';
import SwitchHorizontal01 from '@untitled-ui/icons-react/build/esm/SwitchHorizontal01.js';
import SwitchHorizontal02 from '@untitled-ui/icons-react/build/esm/SwitchHorizontal02.js';
import SwitchVertical01 from '@untitled-ui/icons-react/build/esm/SwitchVertical01.js';
import SwitchVertical02 from '@untitled-ui/icons-react/build/esm/SwitchVertical02.js';
import ShoppingCart01 from '@untitled-ui/icons-react/build/esm/ShoppingCart01.js';
import Tag01 from '@untitled-ui/icons-react/build/esm/Tag01.js';
import Target01 from '@untitled-ui/icons-react/build/esm/Target01.js';
import Target02 from '@untitled-ui/icons-react/build/esm/Target02.js';
import Target03 from '@untitled-ui/icons-react/build/esm/Target03.js';
import Target05 from '@untitled-ui/icons-react/build/esm/Target05.js';
import ThumbsDown from '@untitled-ui/icons-react/build/esm/ThumbsDown.js';
import ThumbsUp from '@untitled-ui/icons-react/build/esm/ThumbsUp.js';
import Translate01 from '@untitled-ui/icons-react/build/esm/Translate01.js';
import Trash02 from '@untitled-ui/icons-react/build/esm/Trash02.js';
import TrendDown01 from '@untitled-ui/icons-react/build/esm/TrendDown01.js';
import TrendDown02 from '@untitled-ui/icons-react/build/esm/TrendDown02.js';
import TrendUp01 from '@untitled-ui/icons-react/build/esm/TrendUp01.js';
import TrendUp02 from '@untitled-ui/icons-react/build/esm/TrendUp02.js';
import Underline01 from '@untitled-ui/icons-react/build/esm/Underline01.js';
import User01 from '@untitled-ui/icons-react/build/esm/User01.js';
import User02 from '@untitled-ui/icons-react/build/esm/User02.js';
import User03 from '@untitled-ui/icons-react/build/esm/User03.js';
import UserCheck01 from '@untitled-ui/icons-react/build/esm/UserCheck01.js';
import UserCheck02 from '@untitled-ui/icons-react/build/esm/UserCheck02.js';
import UserCircle from '@untitled-ui/icons-react/build/esm/UserCircle.js';
import UserDown01 from '@untitled-ui/icons-react/build/esm/UserDown01.js';
import UserDown02 from '@untitled-ui/icons-react/build/esm/UserDown02.js';
import UserEdit from '@untitled-ui/icons-react/build/esm/UserEdit.js';
import UserLeft01 from '@untitled-ui/icons-react/build/esm/UserLeft01.js';
import UserLeft02 from '@untitled-ui/icons-react/build/esm/UserLeft02.js';
import UserMinus01 from '@untitled-ui/icons-react/build/esm/UserMinus01.js';
import UserMinus02 from '@untitled-ui/icons-react/build/esm/UserMinus02.js';
import UserPlus01 from '@untitled-ui/icons-react/build/esm/UserPlus01.js';
import UserPlus02 from '@untitled-ui/icons-react/build/esm/UserPlus02.js';
import UserRight01 from '@untitled-ui/icons-react/build/esm/UserRight01.js';
import UserRight02 from '@untitled-ui/icons-react/build/esm/UserRight02.js';
import UsersEdit from '@untitled-ui/icons-react/build/esm/UsersEdit.js';
import UserSquare from '@untitled-ui/icons-react/build/esm/UserSquare.js';
import VideoRecorder from '@untitled-ui/icons-react/build/esm/VideoRecorder.js';
import VideoRecorderOff from '@untitled-ui/icons-react/build/esm/VideoRecorderOff.js';
import VolumeMax from '@untitled-ui/icons-react/build/esm/VolumeMax.js';
import Webcam01 from '@untitled-ui/icons-react/build/esm/Webcam01.js';
import Webcam02 from '@untitled-ui/icons-react/build/esm/Webcam02.js';
import Youtube from '@untitled-ui/icons-react/build/esm/Youtube.js';
import {
  type LucideProps,
  Album,
  AlertTriangleIcon,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AppWindow,
  ArrowDownAZ,
  ArrowLeftIcon,
  ArrowLeftRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  AudioLines,
  BadgeHelp,
  Baseline,
  BellDot,
  Bold,
  Bot,
  BotMessageSquare,
  BotOff,  
  Boxes,
  Braces,
  Brain,
  Brush,
  Bug,
  Binoculars,
  Calendar,
  Captions,
  ChartNoAxesGantt,
  Check,
  ClipboardPaste, 
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsLeftRightIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  CircleIcon,
  CircleStop,
  Clipboard,
  Clock,
  Code2,
  Columns3,
  Combine,
  CopyIcon,
  CopyX,
  CornerDownLeft,
  CornerDownRightIcon,
  CornerUpLeft,
  CreditCardIcon,
  DownloadIcon,
  Edit2,
  ExternalLink,
  Eye,
  EyeOff,
  File,
  FileArchive,
  FileBarChart2,
  FileCheck,
  FileCode,
  FileCog,
  FileIcon,
  FileInput,
  FileJson,
  FileOutput,
  FilePieChart,
  FilePlus,
  FileSearch,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileText,
  FileTextIcon,
  FileVideo,
  FileWarning,
  Focus,
  FolderHeart,
  FolderRoot,
  Ghost,
  GitBranchPlus,
  GlobeIcon,
  GripVertical,
  GripVerticalIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Hexagon,
  Highlighter,
  Indent,
  InfoIcon,
  Italic,
  Keyboard,
  Languages,
  Laugh,
  LayoutDashboard,
  LayoutPanelTop,
  LayoutTemplate,
  Library,
  LibraryBig,
  Link,
  Link2,
  Link2Off,
  List,
  ListEnd,
  ListMinus,
  ListOrdered,
  ListPlus,
  ListTodo,
  Loader2Icon,
  LogOutIcon,
  Maximize,
  MenuIcon,
  MessageSquareIcon,
  MessageSquarePlus,
  MessageSquareQuote,
  MessagesSquareIcon,
  Minus,
  Moon,
  MoreHorizontal,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  MoveUpRight,
  Outdent,
  Paintbrush,
  PaintbrushIcon,
  PaintBucket,
  PaintRoller,
  PanelLeft,
  PanelRight,
  Paperclip,
  PartyPopper,
  PenLine,
  PictureInPicture2,
  Plus,
  PlusCircleIcon,
  PlusIcon,
  Power,
  Presentation,
  Quote,
  Radical,
  Radio,
  RailSymbol,
  Rainbow,
  RectangleHorizontal,
  RectangleVertical,
  Redo2,
  RefreshCw,
  Regex,
  Replace,
  ReplaceAll,
  RotateCcw,
  RotateCcwIcon,
  ScanSearch,
  SearchSlash,
  Settings,
  ShapesIcon, 
  ShareIcon,
  Sheet,
  Shield,
  SidebarIcon,
  Sigma,
  SlidersHorizontalIcon,
  Smile,
  SmileIcon,
  Sparkles,
  Square,
  SquareBottomDashedScissors,
  SquareDashedMousePointer,
  SquareIcon,
  SquareM,
  SquarePi,
  SquarePlus,
  SquareSigma,
  Squirrel,
  StickyNote,
  Strikethrough,
  Subscript,
  SunMedium,
  Superscript,
  Table,
  Terminal,
  Text,
  Type,
  Underline,
  Undo2,  
  Ungroup,
  UploadCloudIcon,
  UploadIcon,
  Variable,
  Wallpaper,
  Wand,
  Webhook,
  WrapText,
  X,
  XIcon,
  Zap,
  ZoomOut,
} from 'lucide-react';

import { type iconVariants, createIcon } from './icon';

// Define icon categories
export type IconCategory = 
  | 'arrows' 
  | 'charts' 
  | 'communication' 
  | 'editors' 
  | 'files' 
  | 'general' 
  | 'layout' 
  | 'media' 
  | 'navigation' 
  | 'users';

// Define icon with category type
export type IconWithCategory = {
  category: IconCategory;
  icon: React.FC<LucideProps>;
  tooltip?: string; // Descriptive name for tooltip
};

const iconMap = {
  key: { category: 'general', icon: Key01, tooltip: 'Key' },
  activity: { category: 'general', icon: Activity, tooltip: 'Activity' },
  activityHeart: { category: 'editors', icon: ActivityHeart, tooltip: 'Activity Heart' },
  add: { category: 'general', icon: Plus, tooltip: 'Add' },
  ai: { category: 'general', icon: Bot, tooltip: 'AI' },
  airplay: { category: 'media', icon: Airplay, tooltip: 'Airplay' },
  ais: { category: 'general', icon: Sparkles, tooltip: 'AI' },
  alertCircle: { category: 'general', icon: AlertCircle, tooltip: 'Alert Circle' },
  alignCenter: { category: 'editors', icon: AlignCenter, tooltip: 'Align Center' },
  alignJustify: { category: 'editors', icon: AlignJustify, tooltip: 'Align Justify' },
  alignLeft: { category: 'editors', icon: AlignLeft, tooltip: 'Align Left' },
  alignRight: { category: 'editors', icon: AlignRight, tooltip: 'Align Right' },
  anchor: { category: 'editors', icon: Anchor, tooltip: 'Anchor' },
  annotation: { category: 'editors', icon: Annotation, tooltip: 'Annotation' },
  annotationAlert: { category: 'editors', icon: AnnotationAlert, tooltip: 'Annotation Alert' },
  annotationCheck: { category: 'editors', icon: AnnotationCheck, tooltip: 'Annotation Check' },
  annotationHeart: { category: 'editors', icon: AnnotationHeart, tooltip: 'Annotation Heart' },
  annotationInfo: { category: 'editors', icon: AnnotationInfo, tooltip: 'Annotation Info' },
  annotationPlus: { category: 'editors', icon: AnnotationPlus, tooltip: 'Annotation Plus' },
  annotationQuestion: { category: 'editors', icon: AnnotationQuestion, tooltip: 'Annotation Question' },
  annotationX: { category: 'editors', icon: AnnotationX, tooltip: 'Annotation X' },
  archive: { category: 'files', icon: Archive, tooltip: 'Archive' },
  arrowBlockDown: { category: 'arrows', icon: ArrowBlockDown, tooltip: 'Arrow Block Down' },
  arrowBlockLeft: { category: 'arrows', icon: ArrowBlockLeft, tooltip: 'Arrow Block Left' },
  arrowBlockRight: { category: 'arrows', icon: ArrowBlockRight, tooltip: 'Arrow Block Right' },
  arrowBlockUp: { category: 'arrows', icon: ArrowBlockUp, tooltip: 'Arrow Block Up' },
  arrowCircleBrokenDown: { category: 'editors', icon: ArrowCircleBrokenDown, tooltip: 'Arrow Circle Broken Down' },
  arrowCircleBrokenDownLeft: { category: 'editors', icon: ArrowCircleBrokenDownLeft, tooltip: 'Arrow Circle Broken Down Left' },
  arrowCircleBrokenDownRight: { category: 'editors', icon: ArrowCircleBrokenDownRight, tooltip: 'Arrow Circle Broken Down Right' },
  arrowCircleBrokenLeft: { category: 'editors', icon: ArrowCircleBrokenLeft, tooltip: 'Arrow Circle Broken Left' },
  arrowCircleBrokenRight: { category: 'editors', icon: ArrowCircleBrokenRight, tooltip: 'Arrow Circle Broken Right' },
  arrowCircleBrokenUp: { category: 'editors', icon: ArrowCircleBrokenUp, tooltip: 'Arrow Circle Broken Up' },
  arrowCircleBrokenUpLeft: { category: 'editors', icon: ArrowCircleBrokenUpLeft, tooltip: 'Arrow Circle Broken Up Left' },
  arrowCircleBrokenUpRight: { category: 'editors', icon: ArrowCircleBrokenUpRight, tooltip: 'Arrow Circle Broken Up Right' },
  arrowCircleDown: { category: 'arrows', icon: ArrowCircleDown, tooltip: 'Arrow Circle Down' },
  arrowCircleDownLeft: { category: 'editors', icon: ArrowCircleDownLeft, tooltip: 'Arrow Circle Down Left' },
  arrowCircleDownRight: { category: 'editors', icon: ArrowCircleDownRight, tooltip: 'Arrow Circle Down Right' },
  arrowCircleLeft: { category: 'editors', icon: ArrowCircleLeft, tooltip: 'Arrow Circle Left' },
  arrowCircleRight: { category: 'editors', icon: ArrowCircleRight, tooltip: 'Arrow Circle Right' },
  arrowCircleUp: { category: 'editors', icon: ArrowCircleUp, tooltip: 'Arrow Circle Up' },
  arrowCircleUpLeft: { category: 'editors', icon: ArrowCircleUpLeft, tooltip: 'Arrow Circle Up Left' },
  arrowCircleUpRight: { category: 'editors', icon: ArrowCircleUpRight, tooltip: 'Arrow Circle Up Right' },
  arrowDown: { category: 'arrows', icon: ChevronDownIcon, tooltip: 'Arrow Down' },
  arrowDownLeft: { category: 'arrows', icon: ArrowDownLeft, tooltip: 'Arrow Down Left' },
  arrowDownRight: { category: 'arrows', icon: ArrowDownRight, tooltip: 'Arrow Down Right' },
  arrowLeft: { category: 'arrows', icon: ArrowLeftIcon, tooltip: 'Arrow Left' },
  arrowLeftRight: { category: 'arrows', icon: ArrowLeftRightIcon, tooltip: 'Arrow Left Right' },
  arrowNarrowDown: { category: 'arrows', icon: ArrowNarrowDown, tooltip: 'Arrow Narrow Down' },
  arrowNarrowDownLeft: { category: 'arrows', icon: ArrowNarrowDownLeft, tooltip: 'Arrow Narrow Down Left' },
  arrowNarrowDownRight: { category: 'arrows', icon: ArrowNarrowDownRight, tooltip: 'Arrow Narrow Down Right' },
  arrowNarrowLeft: { category: 'arrows', icon: ArrowNarrowLeft, tooltip: 'Arrow Narrow Left' },
  arrowNarrowRight: { category: 'arrows', icon: ArrowNarrowRight, tooltip: 'Arrow Narrow Right' },
  arrowNarrowUp: { category: 'arrows', icon: ArrowNarrowUp, tooltip: 'Arrow Narrow Up' },
  arrowNarrowUpLeft: { category: 'arrows', icon: ArrowNarrowUpLeft, tooltip: 'Arrow Narrow Up Left' },
  arrowNarrowUpRight: { category: 'editors', icon: ArrowNarrowUpRight, tooltip: 'Arrow Narrow Up Right' },
  arrowRight: { category: 'arrows', icon: ArrowRightIcon, tooltip: 'Arrow Right' },
  arrowsDown: { category: 'arrows', icon: ArrowsDown, tooltip: 'Arrows Down' },
  arrowsLeft: { category: 'arrows', icon: ArrowsLeft, tooltip: 'Arrows Left' },
  arrowSquareDown: { category: 'arrows', icon: ArrowSquareDown, tooltip: 'Arrow Square Down' },
  arrowSquareDownLeft: { category: 'arrows', icon: ArrowSquareDownLeft, tooltip: 'Arrow Square Down Left' },
  arrowSquareDownRight: { category: 'arrows', icon: ArrowSquareDownRight, tooltip: 'Arrow Square Down Right' },
  arrowSquareLeft: { category: 'arrows', icon: ArrowSquareLeft, tooltip: 'Arrow Square Left' },
  arrowSquareRight: { category: 'arrows', icon: ArrowSquareRight, tooltip: 'Arrow Square Right' },
  arrowSquareUp: { category: 'arrows', icon: ArrowSquareUp, tooltip: 'Arrow Square Up' },
  arrowSquareUpLeft: { category: 'arrows', icon: ArrowSquareUpLeft, tooltip: 'Arrow Square Up Left' },
  arrowSquareUpRight: { category: 'arrows', icon: ArrowSquareUpRight, tooltip: 'Arrow Square Up Right' },
  arrowsTriangle: { category: 'arrows', icon: ArrowsTriangle, tooltip: 'Arrows Triangle' },
  arrowsUp: { category: 'arrows', icon: ArrowsUp, tooltip: 'Arrows Up' },
  arrowUp: { category: 'arrows', icon: ArrowUpIcon, tooltip: 'Arrow Up' },
  arrowUpLeft: { category: 'arrows', icon: ArrowUpLeft, tooltip: 'Arrow Up Left' },
  arrowUpRight: { category: 'arrows', icon: ArrowUpRight, tooltip: 'Arrow Up Right' },
  // Additional file type mappings
  assignment: { category: 'files', icon: FileCog, tooltip: 'Assignment File' },
  asterisk01: { category: 'editors', icon: Asterisk01, tooltip: 'Asterisk 01' },
  asterisk02: { category: 'editors', icon: Asterisk02, tooltip: 'Asterisk 02' },
  at: { category: 'general', icon: AtSign, tooltip: 'At' },
  atSign: { category: 'editors', icon: AtSign, tooltip: 'At Sign' },
  audio: { category: 'files', icon: Microphone02, tooltip: 'Audio File' },
  audiolines: { category: 'media', icon: AudioLines, tooltip: 'Audio Lines' },
  audioUpload: { category: 'media', icon: Activity, tooltip: 'Audio Upload' },
  barChart01: { category: 'charts', icon: BarChart01, tooltip: 'Bar Chart 01' },
  barChart02: { category: 'charts', icon: BarChart02, tooltip: 'Bar Chart 02' },
  barChart03: { category: 'charts', icon: BarChart03, tooltip: 'Bar Chart 03' },
  barChart04: { category: 'charts', icon: BarChart04, tooltip: 'Bar Chart 04' },
  barChart05: { category: 'editors', icon: BarChart05, tooltip: 'Bar Chart 05' },
  barChart06: { category: 'editors', icon: BarChart06, tooltip: 'Bar Chart 06' },
  barChart07: { category: 'editors', icon: BarChart07, tooltip: 'Bar Chart 07' },
  barChart08: { category: 'editors', icon: BarChart08, tooltip: 'Bar Chart 08' },
  barChart09: { category: 'editors', icon: BarChart09, tooltip: 'Bar Chart 09' },
  barChart10: { category: 'editors', icon: BarChart10, tooltip: 'Bar Chart 10' },
  barChart11: { category: 'editors', icon: BarChart11, tooltip: 'Bar Chart 11' },
  barChart12: { category: 'editors', icon: BarChart12, tooltip: 'Bar Chart 12' },
  barChartCircle01: { category: 'charts', icon: BarChartCircle01, tooltip: 'Bar Chart Circle 01' },
  barChartCircle02: { category: 'charts', icon: BarChartCircle02, tooltip: 'Bar Chart Circle 02' },
  barChartCircle03: { category: 'charts', icon: BarChartCircle03, tooltip: 'Bar Chart Circle 03' },
  barChartSquare01: { category: 'charts', icon: BarChartSquare01, tooltip: 'Bar Chart Square 01' },
  barChartSquare02: { category: 'charts', icon: BarChartSquare02, tooltip: 'Bar Chart Square 02' },
  barChartSquareDown: { category: 'editors', icon: BarChartSquareDown, tooltip: 'Bar Chart Square Down' },
  barChartSquareMinus: { category: 'editors', icon: BarChartSquareMinus, tooltip: 'Bar Chart Square Minus' },
  barChartSquarePlus: { category: 'editors', icon: BarChartSquarePlus, tooltip: 'Bar Chart Square Plus' },
  barChartSquareUp: { category: 'editors', icon: BarChartSquareUp, tooltip: 'Bar Chart Square Up' },
  barLineChart: { category: 'charts', icon: BarLineChart, tooltip: 'Bar Line Chart' },
  baseline: { category: 'editors', icon: Baseline, tooltip: 'Text' },
  beaker: { category: 'general', icon: Beaker01, tooltip: 'Beaker 01' },
  belldot: { category: 'general', icon: BellDot, tooltip: 'Notification' },
  bg: { category: 'editors', icon: PaintBucket, tooltip: 'Background' },
  blockquote: { category: 'editors', icon: Quote, tooltip: 'Blockquote' },
  bluetoothoff: { category: 'editors', icon: BluetoothOff, tooltip: 'Bluetooth Off' },
  bluetoothon: { category: 'editors', icon: BluetoothOn, tooltip: 'Bluetooth On' },
  bold: { category: 'editors', icon: Bold, tooltip: 'Bold' },
  boldsquare: { category: 'editors', icon: BoldSquare, tooltip: 'Bold Square' },
  bookmarkAdd: { category: 'editors', icon: BookmarkAdd, tooltip: 'Bookmark Add' },
  bookmarkCheck: { category: 'editors', icon: BookmarkCheck, tooltip: 'Bookmark Check' },
  bookmarkMinus: { category: 'editors', icon: BookmarkMinus, tooltip: 'Bookmark Minus' },
  bookmarkX: { category: 'editors', icon: BookmarkX, tooltip: 'Bookmark X' },
  bookopen: { category: 'editors', icon: BookOpen01, tooltip: 'Book Open' },
  binoculars: { category: 'general', icon: Binoculars, tooltip: 'Binoculars' },
  bot: { category: 'users', icon: Bot, tooltip: 'Bot' },
  box: { category: 'general', icon: FlexAlignTop, tooltip: 'Box' },
  boxes: { category: 'general', icon: Boxes, tooltip: 'Boxes' },
  Braces: { category: 'editors', icon: Braces, tooltip: 'Braces' },
  brain: { category: 'general', icon: Brain, tooltip: 'Brain' },
  brush: { category: 'editors', icon: Brush, tooltip: 'Brush Cleaning' },
  bug: { category: 'general', icon: Bug, tooltip: 'Bug' },
  building01: { category: 'editors', icon: Building01, tooltip: 'Building 01' },
  building02: { category: 'editors', icon: Building02, tooltip: 'Building 02' },
  calculator: { category: 'general', icon: Calculator, tooltip: 'Calculator' },
  calendar: { category: 'general', icon: Calendar, tooltip: 'Calendar' },
  calendardate: { category: 'general', icon: CalendarDate, tooltip: 'Calendar Date' },
  callout: { category: 'communication', icon: Lightbulb02, tooltip: 'Callout' },
  camera: { category: 'general', icon: Camera01, tooltip: 'Camera' },
  caption: { category: 'media', icon: Captions, tooltip: 'Caption' },
  chartBreakoutCircle: { category: 'editors', icon: ChartBreakoutCircle, tooltip: 'Chart Breakout Circle' },
  chartBreakoutSquare: { category: 'editors', icon: ChartBreakoutSquare, tooltip: 'Chart Breakout Square' },
  check: { category: 'general', icon: Check, tooltip: 'Check' },
  checkCircle: { category: 'general', icon: CheckCircle, tooltip: 'Check Circle' },
  checked: { category: 'general', icon: CheckIcon, tooltip: 'Checked' },
  chevronDown: { category: 'arrows', icon: ChevronDownIcon, tooltip: 'Chevron Down' },
  chevronDownDouble: { category: 'arrows', icon: ChevronDownDouble, tooltip: 'Chevron Down Double' },
  chevronLeft: { category: 'arrows', icon: ChevronLeftIcon, tooltip: 'Chevron Left' },
  chevronLeftDouble: { category: 'arrows', icon: ChevronLeftDouble, tooltip: 'Chevron Left Double' },
  chevronRight: { category: 'arrows', icon: ChevronRightIcon, tooltip: 'Chevron Right' },
  chevronRightDouble: { category: 'editors', icon: ChevronRightDouble, tooltip: 'Chevron Right Double' },
  chevronSelectorHorizontal: { category: 'editors', icon: ChevronSelectorHorizontal, tooltip: 'Chevron Selector Horizontal' },
  chevronSelectorVertical: { category: 'arrows', icon: ChevronSelectorVertical, tooltip: 'Chevron Selector Vertical' },
  chevronsLeft: { category: 'arrows', icon: ChevronsLeftIcon, tooltip: 'Chevrons Left' },
  chevronsLeftRight: { category: 'arrows', icon: ChevronsLeftRightIcon, tooltip: 'Chevrons Left Right' },
  chevronsRight: { category: 'arrows', icon: ChevronsRightIcon, tooltip: 'Chevrons Right' },
  chevronsUpDown: { category: 'arrows', icon: ChevronsUpDownIcon, tooltip: 'Chevrons Up Down' },
  chevronUp: { category: 'arrows', icon: ChevronUpIcon, tooltip: 'Chevron Up' },
  chevronUpDouble: { category: 'arrows', icon: ChevronUpDouble, tooltip: 'Chevron Up Double' },
  circle: { category: 'general', icon: CircleIcon, tooltip: 'Circle' },
  clear: { category: 'general', icon: X, tooltip: 'Clear' },
  clip: { category: 'general', icon: Attachment02, tooltip: 'Clip' },
  clipboard: { category: 'editors', icon: Clipboard, tooltip: 'Clipboard' },
  clock: { category: 'general', icon: Clock, tooltip: 'Clock' },
  close: { category: 'general', icon: X, tooltip: 'Close' },
  code: { category: 'general', icon: Code2, tooltip: 'Code' },
  codeblock: { category: 'general', icon: FileCode, tooltip: 'Code Block' },
  codebrowser: { category: 'general', icon: CodeBrowser, tooltip: 'Code Browser' },
  color: { category: 'editors', icon: PaintRoller, tooltip: 'Color' },
  colors: { category: 'editors', icon: Colors, tooltip: 'Colors' },
  column: { category: 'editors', icon: RectangleVertical, tooltip: 'Column' },
  columns3: { category: 'general', icon: Columns3, tooltip: 'Columns 3' },
  combine: { category: 'general', icon: Combine, tooltip: 'Combine' },
  command: { category: 'editors', icon: Command, tooltip: 'Command' },
  comment: { category: 'general', icon: AnnotationDots, tooltip: 'Comment' },
  commentAdd: { category: 'communication', icon: MessageSquarePlus, tooltip: 'Comment Add' },
  config: { category: 'files', icon: Settings, tooltip: 'Config File' },
  continueWrite: { category: 'editors', icon: PenLine, tooltip: 'Continue Write' },
  copy: { category: 'general', icon: CopyIcon, tooltip: 'Copy' },
  copyLink: { category: 'general', icon: Link, tooltip: 'Copy Link' },
  creditCard: { category: 'general', icon: CreditCardIcon, tooltip: 'Credit Card' },
  cursor: { category: 'general', icon: CursorClick01, tooltip: 'Cursor' },
  cursorbox: { category: 'general', icon: CursorBox, tooltip: 'Cursor Box' },
  cursorclick: { category: 'general', icon: CursorClick01, tooltip: 'Cursor Click' },
  dashboard: { category: 'editors', icon: LayoutDashboard, tooltip: 'Dashboard' },
  data: { category: 'general', icon: Data, tooltip: 'Data' },
  database: { category: 'general', icon: Database01, tooltip: 'Database' },
  dataflow: { category: 'general', icon: Dataflow03, tooltip: 'Data Flow 03' },
  delete: { category: 'general', icon: Trash02, tooltip: 'Delete' },
  dependency: { category: 'files', icon: Webhook, tooltip: 'Dependency File' },
  document: { category: 'general', icon: File02, tooltip: 'Document' },
  done: { category: 'general', icon: Check, tooltip: 'Done' },
  dotpoints: { category: 'general', icon: Dotpoints02, tooltip: 'Dot Points' },
  download: { category: 'general', icon: DownloadIcon, tooltip: 'Download' },
  download04: { category: 'editors', icon: Download04, tooltip: 'Download 04' },
  downloadCloud01: { category: 'editors', icon: DownloadCloud01, tooltip: 'Download Cloud 01' },
  downloadCloud02: { category: 'editors', icon: DownloadCloud02, tooltip: 'Download Cloud 02' },
  dragHandle: { category: 'general', icon: GripVertical, tooltip: 'Drag Handle' },
  duplicate: { category: 'general', icon: LayersTwo02, tooltip: 'Duplicate' },
  dropper: { category: 'general', icon: Dropper, tooltip: 'Dropper' },
  dropzone: { category: 'general', icon: UploadIcon, tooltip: 'Dropzone' },
  edit: { category: 'editors', icon: PencilLine, tooltip: 'Edit' },
  edit01: { category: 'editors', icon: Edit01, tooltip: 'Edit 01' },
  edit02: { category: 'editors', icon: Edit02, tooltip: 'Edit 02' },
  edit03: { category: 'editors', icon: Edit03, tooltip: 'Edit 03' },
  edit04: { category: 'editors', icon: Edit04, tooltip: 'Edit 04' },
  editing: { category: 'editors', icon: Edit2, tooltip: 'Editing' },
  editor: { category: 'editors', icon: FileTextIcon, tooltip: 'Editor' },
  emoji: { category: 'general', icon: Smile, tooltip: 'Emoji' },
  empty: { category: 'general', icon: SearchSlash, tooltip: 'Empty' },
  enter: { category: 'general', icon: CornerDownLeft, tooltip: 'Enter' },
  gift: { category: 'general', icon: Gift01, tooltip: 'Gift' },
  env: { category: 'files', icon: Variable, tooltip: 'Environment File' },
  equal: { category: 'editors', icon: Equal, tooltip: 'Equal' },
  equalNot: { category: 'editors', icon: EqualNot, tooltip: 'Equal Not' },
  equation: { category: 'editors', icon: CopyX, tooltip: 'Equation' },
  eraser: { category: 'editors', icon: Eraser, tooltip: 'Eraser' },
  exam: { category: 'files', icon: FileCheck, tooltip: 'Exam File' },
  executable: { category: 'files', icon: Terminal, tooltip: 'Executable File' },
  exitBreak: { category: 'general', icon: CornerDownLeft, tooltip: 'Exit Break' },
  expand01: { category: 'editors', icon: Expand01, tooltip: 'Expand 01' },
  expand02: { category: 'editors', icon: Expand02, tooltip: 'Expand 02' },
  expand03: { category: 'editors', icon: Expand03, tooltip: 'Expand 03' },
  expand04: { category: 'editors', icon: Expand04, tooltip: 'Expand 04' },
  expand05: { category: 'editors', icon: Expand05, tooltip: 'Expand 05' },
  expand06: { category: 'editors', icon: Expand06, tooltip: 'Expand 06' },
  explain: { category: 'general', icon: BadgeHelp, tooltip: 'Explain' },
  explore: { category: 'editors', icon: Compass01, tooltip: 'Explore' },
  externalLink: { category: 'general', icon: ExternalLink, tooltip: 'External Link' },
  eye: { category: 'general', icon: Eye, tooltip: 'Eye' },
  eyeOff: { category: 'editors', icon: EyeOff, tooltip: 'Eye Off' },
  faceContent: { category: 'editors', icon: FaceContent, tooltip: 'Face Content' },
  faceFrown: { category: 'editors', icon: FaceFrown, tooltip: 'Face Frown' },
  faceHappy: { category: 'editors', icon: FaceHappy, tooltip: 'Face Happy' },
  faceNeutral: { category: 'editors', icon: FaceNeutral, tooltip: 'Face Neutral' },
  
  faceSad: { category: 'editors', icon: FaceSad, tooltip: 'Face Sad' },
  faceSmile: { category: 'editors', icon: FaceSmile, tooltip: 'Face Smile' },
  faceWink: { category: 'editors', icon: FaceWink, tooltip: 'Face Wink' },
  feedback: { category: 'general', icon: Announcement01, tooltip: 'Feedback' },
  file: { category: 'files', icon: FileIcon, tooltip: 'File' },
  // File type icons - ensuring all are defined in 'files' category
  FileArchive: { category: 'files', icon: FileArchive, tooltip: 'Archive File' },
  FileBarChart2: { category: 'files', icon: FileBarChart2, tooltip: 'Bar Chart File' },
  FileCheck: { category: 'files', icon: FileCheck, tooltip: 'Check File' },
  FileCode: { category: 'files', icon: FileCode, tooltip: 'Code File' },
  FileCog: { category: 'files', icon: FileCog, tooltip: 'Config File' },
  FileInput: { category: 'files', icon: FileInput, tooltip: 'Input File' },
  FileJson: { category: 'files', icon: FileJson, tooltip: 'JSON File' },
  FileOutput: { category: 'files', icon: FileOutput, tooltip: 'Output File' },
  FilePieChart: { category: 'files', icon: FilePieChart, tooltip: 'Pie Chart File' },
  filePlus: { category: 'editors', icon: FilePlus, tooltip: 'File Plus' },
  FileQuestion: { category: 'files', icon: FileQuestion01, tooltip: 'Question File' },
  FileSearch: { category: 'files', icon: FileSearch, tooltip: 'Search File' },
  FileSpreadsheet: { category: 'files', icon: FileSpreadsheet, tooltip: 'Spreadsheet File' },
  FileStack: { category: 'files', icon: FileStack, tooltip: 'Stack File' },
  FileSymlink: { category: 'files', icon: FileSymlink, tooltip: 'Symlink File' },
  FileText: { category: 'files', icon: FileText, tooltip: 'Text File' },
  fileText: { category: 'editors', icon: Album, tooltip: 'Summarize' },
  fileUpload: { category: 'general', icon: Paperclip, tooltip: 'File Upload' },
  FileVideo: { category: 'files', icon: FileVideo, tooltip: 'Video File' },
  FileWarning: { category: 'files', icon: FileWarning, tooltip: 'Warning File' },
  film: { category: 'general', icon: Film03, tooltip: 'Film' },
  filterFunnel01: { category: 'editors', icon: FilterFunnel01, tooltip: 'Filter Funnel 01' },
  filterFunnel02: { category: 'editors', icon: FilterFunnel02, tooltip: 'Filter Funnel 02' },
  find: { category: 'editors', icon: Regex, tooltip: 'Find' },
  fixedToolbar: { category: 'editors', icon: AppWindow, tooltip: 'Fixed Toolbar' },
  flag: { category: 'general', icon: Flag01, tooltip: 'Flag' },
  flashcard: { category: 'files', icon: FileStack, tooltip: 'Flashcard File' },
  flipBackward: { category: 'editors', icon: FlipBackward, tooltip: 'Flip Backward' },
  flipForward: { category: 'editors', icon: FlipForward, tooltip: 'Flip Forward' },
  focus: { category: 'files', icon: Focus, tooltip: 'Focus' },
  folder: { category: 'general', icon: FolderRoot, tooltip: 'Folder' },
  folderHeart: { category: 'files', icon: FolderHeart, tooltip: 'Folder Heart' },
  folderPlus: { category: 'general', icon: FolderPlus, tooltip: 'Folder Plus' },
  font: { category: 'editors', icon: Heading02, tooltip: 'Font' },
  format: { category: 'general', icon: ChartNoAxesGantt, tooltip: 'Format' },
  fullwidth: { category: 'editors', icon: SpacingWidth02, tooltip: 'Full Width' },
  games: { category: 'media', icon: GamingPad01, tooltip: 'Games' },
  ghost: { category: 'general', icon: Ghost, tooltip: 'Ghost' },
  gitbranch02: { category: 'general', icon: GitBranch02, tooltip: 'Git Branch 02' },
  github: { category: 'general', icon: GitBranch02, tooltip: 'GitHub' },
  glasses: { category: 'general', icon: Glasses01, tooltip: 'Glasses' },
  globe: { category: 'general', icon: GlobeIcon, tooltip: 'Globe' },
  go: { category: 'files', icon: FileCheck, tooltip: 'Go File' },
  google: { category: 'general', icon: GoogleChrome, tooltip: 'Google Chrome' },
  gripVertical: { category: 'general', icon: GripVerticalIcon, tooltip: 'Grip Vertical' },
  h1: { category: 'editors', icon: Heading1, tooltip: 'Heading 1' },
  
  h2: { category: 'editors', icon: Heading2, tooltip: 'Heading 2' },
  h3: { category: 'editors', icon: Heading3, tooltip: 'Heading 3' },
  h4: { category: 'editors', icon: Heading4, tooltip: 'Heading 4' },
  h5: { category: 'editors', icon: Heading5, tooltip: 'Heading 5' },
  h6: { category: 'editors', icon: Heading6, tooltip: 'Heading 6' },
  heart: { category: 'general', icon: Heart, tooltip: 'Heart' },
  helpCircle: { category: 'editors', icon: AnnotationQuestion, tooltip: 'Help' },
  hexagon: { category: 'editors', icon: Hexagon, tooltip: 'Hexagon' },
  hidden: { category: 'general', icon: EyeOff, tooltip: 'Hidden' },
  hide: { category: 'general', icon: XIcon, tooltip: 'Hide' },
  highlight: { category: 'editors', icon: Highlighter, tooltip: 'Highlight' },
  history: { category: 'general', icon: ClockRewind, tooltip: 'History' },
  home: { category: 'general', icon: Home02, tooltip: 'Home' },
  horizontalBarChart01: { category: 'charts', icon: HorizontalBarChart01, tooltip: 'Horizontal Bar Chart 01' },
  horizontalBarChart02: { category: 'charts', icon: HorizontalBarChart02, tooltip: 'Horizontal Bar Chart 02' },
  horizontalBarChart03: { category: 'charts', icon: HorizontalBarChart03, tooltip: 'Horizontal Bar Chart 03' },
  html: { category: 'editors', icon: ParagraphWrap, tooltip: 'HTML' },
  image: { category: 'files', icon: Image01, tooltip: 'Image File' },
  Image01: { category: 'media', icon: Image01, tooltip: 'Image 01' },
  imagePlus: { category: 'media', icon: ImagePlus, tooltip: 'Image Plus' },
  imageUpload: { category: 'media', icon: UploadIcon, tooltip: 'Image Upload' },
  import: { category: 'editors', icon: ArrowDownAZ, tooltip: 'Import' },
  improve: { category: 'editors', icon: Wand, tooltip: 'Improve' },
  indent: { category: 'editors', icon: Indent, tooltip: 'Indent' },
  index: { category: 'editors', icon: ScanSearch, tooltip: 'Index' },
  infinity: { category: 'editors', icon: InfinityIcon, tooltip: 'Infinity' },
  info: { category: 'general', icon: InfoIcon, tooltip: 'Info' },
  inlineEquation: { category: 'editors', icon: Radical, tooltip: 'Inline Equation' },
  inprogress: { category: 'general', icon: CircleDot, tooltip: 'In Progress' },
  insertBelow: { category: 'editors', icon: ListEnd, tooltip: 'Insert Below' },
  intersectsquare: { category: 'general', icon: IntersectSquare, tooltip: 'Intersect Square' },
  italic: { category: 'editors', icon: Italic, tooltip: 'Italic' },
  italicSquare: { category: 'editors', icon: ItalicSquare, tooltip: 'Italic Square' },
  java: { category: 'files', icon: FileCog, tooltip: 'Java File' },
  javascript: { category: 'files', icon: FileCode, tooltip: 'JavaScript File' },
  json: { category: 'files', icon: FileJson, tooltip: 'JSON File' },
  kbd: { category: 'editors', icon: Keyboard, tooltip: 'Keyboard' },
  keyboard02: { category: 'editors', icon: Keyboard02, tooltip: 'Keyboard 02' },
  laptop: { category: 'editors', icon: Laptop02, tooltip: 'Laptop' },
  laugh: { category: 'general', icon: Laugh, tooltip: 'Laugh' },
  layers: { category: 'editors', icon: LayersThree02, tooltip: 'Layers' },
  layoutleft: { category: 'editors', icon: FlexAlignLeft, tooltip: 'Layout Left' },
  layoutpaneltop: { category: 'layout', icon: LayoutPanelTop, tooltip: 'Layout Panel Top' },
  layoutright: { category: 'editors', icon: FlexAlignRight, tooltip: 'Layout Right' },
  LayoutTemplate: { category: 'editors', icon: LayoutTemplate, tooltip: 'Layout Template' },
  leftindent: { category: 'editors', icon: LeftIndent01, tooltip: 'Left Indent' },
  library: { category: 'files', icon: Library, tooltip: 'Library File' },
  Library: { category: 'editors', icon: Library, tooltip: 'Library' },
  librarybig: { category: 'editors', icon: LibraryBig, tooltip: 'Library Big' },
  lightbulb: { category: 'communication', icon: Lightbulb02, tooltip: 'Lightbulb' },
  lineChartDown01: { category: 'charts', icon: LineChartDown01, tooltip: 'Line Chart Down 01' },
  lineChartDown02: { category: 'charts', icon: LineChartDown02, tooltip: 'Line Chart Down 02' },
  lineChartDown03: { category: 'editors', icon: LineChartDown03, tooltip: 'Line Chart Down 03' },
  lineChartDown04: { category: 'editors', icon: LineChartDown04, tooltip: 'Line Chart Down 04' },
  lineChartDown05: { category: 'editors', icon: LineChartDown05, tooltip: 'Line Chart Down 05' },
  lineChartUp01: { category: 'editors', icon: LineChartUp01, tooltip: 'Line Chart Up 01' },
  lineChartUp02: { category: 'editors', icon: LineChartUp02, tooltip: 'Line Chart Up 02' },
  lineChartUp03: { category: 'editors', icon: LineChartUp03, tooltip: 'Line Chart Up 03' },
  lineChartUp04: { category: 'editors', icon: LineChartUp04, tooltip: 'Line Chart Up 04' },
  lineChartUp05: { category: 'editors', icon: LineChartUp05, tooltip: 'Line Chart Up 05' },
  lineHeight: { category: 'editors', icon: WrapText, tooltip: 'Line Height' },
  link: { category: 'editors', icon: Link2, tooltip: 'Link' },
  link01: { category: 'editors', icon: Link01, tooltip: 'Link 01' },
  linkbroken: { category: 'general', icon: LinkBroken01, tooltip: 'Link Broken' },
  linkBroken02: { category: 'editors', icon: LinkBroken02, tooltip: 'Link Broken 02' },
  linkExternal01: { category: 'editors', icon: LinkExternal01, tooltip: 'Link External 01' },
  linkExternal02: { category: 'editors', icon: LinkExternal02, tooltip: 'Link External 02' },
  listTodo: { category: 'editors', icon: ListTodo, tooltip: 'List Todo' },
  live: { category: 'general', icon: Webcam02, tooltip: 'Live' },
  loading01: { category: 'editors', icon: Loading01, tooltip: 'Loading 01' },
  loading02: { category: 'editors', icon: Loading02, tooltip: 'Loading 02' },
  loading03: { category: 'editors', icon: Loading03, tooltip: 'Loading 03' },
  lock: { category: 'editors', icon: Lock01, tooltip: 'Lock' },
  logIn01: { category: 'editors', icon: LogIn01, tooltip: 'Log In 01' },
  logIn02: { category: 'editors', icon: LogIn02, tooltip: 'Log In 02' },
  logIn03: { category: 'editors', icon: LogIn03, tooltip: 'Log In 03' },
  logo: { category: 'editors', icon: Palette, tooltip: 'Logo' },
  logoDiscord: { category: 'editors', tooltip: 'Logo Discord', icon: (_props: LucideProps) => null },
  logout: { category: 'editors', icon: LogOutIcon, tooltip: 'Logout' },
  logOut01: { category: 'editors', icon: LogOut01, tooltip: 'Log Out 01' },
  logOut02: { category: 'editors', icon: LogOut02, tooltip: 'Log Out 02' },
  logOut03: { category: 'editors', icon: LogOut03, tooltip: 'Log Out 03' },
  logOut04: { category: 'editors', icon: LogOut04, tooltip: 'Log Out 04' },
  logoX: { category: 'editors', icon: XIcon, tooltip: 'Logo X' },
  lucideCornerDownLeft: { category: 'editors', icon: CornerDownLeft, tooltip: 'Lucide Corner Down Left' },
  lucideCornerUpLeft: { category: 'editors', icon: CornerUpLeft, tooltip: 'Lucide Corner Up Left' },
  magicwand: { category: 'editors', icon: MagicWand02, tooltip: 'Magic Wand' },
  mail01: { category: 'editors', icon: Mail01, tooltip: 'Mail 01' },
  mail02: { category: 'editors', icon: Mail02, tooltip: 'Mail 02' },
  mail03: { category: 'editors', icon: Mail03, tooltip: 'Mail 03' },
  mail04: { category: 'editors', icon: Mail04, tooltip: 'Mail 04' },
  mail05: { category: 'editors', icon: Mail05, tooltip: 'Mail 05' },
  makeLonger: { category: 'editors', icon: ListPlus, tooltip: 'Make Longer' },
  makeShorter: { category: 'editors', icon: ListMinus, tooltip: 'Make Shorter' },
  markdown: { category: 'editors', icon: SquareM, tooltip: 'Markdown' },
  marker: { category: 'editors', icon: Highlighter, tooltip: 'Marker' },
  markup: { category: 'files', icon: LayoutTemplate, tooltip: 'Markup File' },
  maximize: { category: 'general', icon: Maximize, tooltip: 'Maximize' },
  mediaFile: { category: 'editors', icon: File, tooltip: 'Media File' },
  member: { category: 'editors', icon: Award02, tooltip: 'Member' },
  menu: { category: 'editors', icon: MenuIcon, tooltip: 'Menu' },
  message: { category: 'editors', icon: MessageSquareIcon, tooltip: 'Message' },
  messageAlertCircle: { category: 'editors', icon: MessageAlertCircle, tooltip: 'Message Alert Circle' },
  messageAlertSquare: { category: 'editors', icon: MessageAlertSquare, tooltip: 'Message Alert Square' },
  messagebot: { category: 'editors', icon: BotMessageSquare, tooltip: 'Message Bot' },
  messagebotoff: { category: 'editors', icon: BotOff, tooltip: 'Message Bot Off' },
  messageChatCircle: { category: 'editors', icon: MessageChatCircle, tooltip: 'Message Chat Circle' },
  messageChatSquare: { category: 'editors', icon: MessageChatSquare, tooltip: 'Message Chat Square' },
  messageCheckCircle: { category: 'editors', icon: MessageCheckCircle, tooltip: 'Message Check Circle' },
  messageCheckSquare: { category: 'editors', icon: MessageCheckSquare, tooltip: 'Message Check Square' },
  messageCircle01: { category: 'editors', icon: MessageCircle01, tooltip: 'Message Circle 01' },
  messageCircle02: { category: 'editors', icon: MessageCircle02, tooltip: 'Message Circle 02' },
  messageDotsCircle: { category: 'editors', icon: MessageDotsCircle, tooltip: 'Message Dots Circle' },
  messageDotsSquare: { category: 'editors', icon: MessageDotsSquare, tooltip: 'Message Dots Square' },
  messageHeartCircle: { category: 'editors', icon: MessageHeartCircle, tooltip: 'Message Heart Circle' },
  messageHeartSquare: { category: 'editors', icon: MessageHeartSquare, tooltip: 'Message Heart Square' },
  messageNotificationSquare: { category: 'communication', icon: MessageNotificationSquare, tooltip: 'Message Notification Square' },
  messagePlusCircle: { category: 'editors', icon: MessagePlusCircle, tooltip: 'Message Plus Circle' },
  messagePlusSquare: { category: 'editors', icon: MessagePlusSquare, tooltip: 'Message Plus Square' },
  messageQuestionCircle: { category: 'editors', icon: MessageQuestionCircle, tooltip: 'Message Question Circle' },
  messageQuestionSquare: { category: 'editors', icon: MessageQuestionSquare, tooltip: 'Message Question Square' },
  messages: { category: 'editors', icon: MessagesSquareIcon, tooltip: 'Messages' },
  messageSmileCircle: { category: 'editors', icon: MessageSmileCircle, tooltip: 'Message Smile Circle' },
  messagesmilesquare: { category: 'editors', icon: MessageSmileSquare, tooltip: 'Message Smile Square' },
  messageSmileSquare: { category: 'editors', icon: MessageSmileSquare, tooltip: 'Message Smile Square' },
  messageSquare01: { category: 'editors', icon: MessageSquare01, tooltip: 'Message Square 01' },
  messageSquare02: { category: 'editors', icon: MessageSquare02, tooltip: 'Message Square 02' },
  messageTextCircle01: { category: 'editors', icon: MessageTextCircle01, tooltip: 'Message Text Circle 01' },
  messageTextCircle02: { category: 'editors', icon: MessageTextCircle02, tooltip: 'Message Text Circle 02' },
  messageTextSquare01: { category: 'editors', icon: MessageTextSquare01, tooltip: 'Message Text Square 01' },
  messageTextSquare02: { category: 'editors', icon: MessageTextSquare02, tooltip: 'Message Text Square 02' },
  messageXCircle: { category: 'editors', icon: MessageXCircle, tooltip: 'Message X Circle' },
  messageXSquare: { category: 'editors', icon: MessageXSquare, tooltip: 'Message X Square' },
  microphone: { category: 'editors', icon: Microphone01, tooltip: 'Microphone' },
  Microphone02: { category: 'editors', icon: Microphone02, tooltip: 'Microphone 02' },
  microphoneOff: { category: 'editors', icon: MicrophoneOff01, tooltip: 'Microphone Off' },
  minimize: { category: 'general', icon: Minimize02, tooltip: 'Minimize' },
  minimize02: { category: 'general', icon: Minimize02, tooltip: 'Minimize 02' },
  minus: { category: 'editors', icon: Minus, tooltip: 'Minus' },
  monitor02: { category: 'media', icon: Monitor02, tooltip: 'Monitor 02' },
  moon: { category: 'editors', icon: Moon, tooltip: 'Moon' },
  more: { category: 'editors', icon: MoreHorizontal, tooltip: 'More' },
  moreX: { category: 'editors', icon: MoreHorizontalIcon, tooltip: 'More X' },
  moreY: { category: 'editors', icon: MoreVerticalIcon, tooltip: 'More Y' },
  move: { category: 'editors', icon: Move, tooltip: 'Move' },
  newPage: { category: 'editors', icon: Edit04, tooltip: 'New Page' },
  note: { category: 'files', icon: FileText, tooltip: 'Note File' },
  NotificationMessage: { category: 'editors', icon: NotificationMessage, tooltip: 'Notification Message' },
  notstarted: { category: 'editors', icon: CircleDashed, tooltip: 'Not Started' },
  ol: { category: 'editors', icon: ListOrdered, tooltip: 'Ordered List' },
  original: { category: 'editors', icon: MoveUpRight, tooltip: 'Original' }, 
  outdent: { category: 'editors', icon: Outdent, tooltip: 'Outdent' },
  package: { category: 'files', icon: FileBarChart2, tooltip: 'Package File' },
  paintbrush: { category: 'editors', icon: PaintbrushIcon, tooltip: 'Paintbrush' },
  Paintbrush: { category: 'editors', icon: Paintbrush, tooltip: 'Paintbrush' },
  palette: { category: 'general', icon: Palette, tooltip: 'Palette' },
  panelLeft: { category: 'editors', icon: PanelLeft, tooltip: 'Panel Left' },
  panelRight: { category: 'editors', icon: PanelRight, tooltip: 'Panel Right' },
  paragraph: { category: 'editors', icon: Pilcrow02, tooltip: 'Paragraph' },
  paragraphSpacing: { category: 'editors', icon: ParagraphSpacing, tooltip: 'Paragraph Spacing' },
  pause: { category: 'editors', icon: PauseSquare, tooltip: 'Pause' },
  pausesquare: { category: 'editors', icon: PauseSquare, tooltip: 'Pause Square' },
  pdf: { category: 'files', icon: FilePieChart, tooltip: 'PDF File' },
  pen: { category: 'editors', icon: PenTool02, tooltip: 'Pen Tool 02' },
  pencil: { category: 'editors', icon: PencilLine, tooltip: 'Pencil Line' },
  pentool02: { category: 'editors', icon: PenTool02, tooltip: 'Pen Tool 02' },
  pentoolplus: { category: 'editors', icon: PenToolPlus, tooltip: 'Pen Tool Plus' },
  phone: { category: 'editors', icon: Phone, tooltip: 'Phone' },
  phone01: { category: 'editors', icon: Phone01, tooltip: 'Phone 01' },
  phoneCall01: { category: 'editors', icon: PhoneCall01, tooltip: 'Phone Call 01' },
  phoneCall02: { category: 'editors', icon: PhoneCall02, tooltip: 'Phone Call 02' },
  phoneIncoming01: { category: 'editors', icon: PhoneIncoming01, tooltip: 'Phone Incoming 01' },
  phoneIncoming02: { category: 'editors', icon: PhoneIncoming02, tooltip: 'Phone Incoming 02' },
  phoneOutgoing01: { category: 'editors', icon: PhoneOutgoing01, tooltip: 'Phone Outgoing 01' },
  phoneOutgoing02: { category: 'editors', icon: PhoneOutgoing02, tooltip: 'Phone Outgoing 02' },
  phonePause: { category: 'editors', icon: PhonePause, tooltip: 'Phone Pause' },
  phonePlus: { category: 'editors', icon: PhonePlus, tooltip: 'Phone Plus' },
  phoneX: { category: 'editors', icon: PhoneX, tooltip: 'Phone X' },
  pi: { category: 'editors', icon: SquarePi, tooltip: 'Pi' },
  paste: { category: 'editors', icon: ClipboardPaste, tooltip: 'Paste' },
  pictureInPicture: { category: 'editors', icon: PictureInPicture2, tooltip: 'Picture In Picture' },
  pieChart01: { category: 'charts', icon: PieChart01, tooltip: 'Pie Chart 01' },
  pieChart02: { category: 'charts', icon: PieChart02, tooltip: 'Pie Chart 02' },
  pieChart03: { category: 'charts', icon: PieChart03, tooltip: 'Pie Chart 03' },
  pieChart04: { category: 'charts', icon: PieChart04, tooltip: 'Pie Chart 04' },
  piggybank: { category: 'editors', icon: PiggyBank01, tooltip: 'Piggy Bank' },
  plane: { category: 'editors', icon: Plane, tooltip: 'Plane' },
  play: { category: 'editors', icon: PlaySquare, tooltip: 'Play' },
  plus: { category: 'editors', icon: PlusIcon, tooltip: 'Plus' },
  plusCircle: { category: 'editors', icon: PlusCircleIcon, tooltip: 'Plus Circle' },
  plusSquare: { category: 'general', icon: PlusSquare, tooltip: 'Plus Square' },
  pods: { category: 'editors', icon: Boxes, tooltip: 'Pods' },
  power: { category: 'editors', icon: Power, tooltip: 'Power' },
  presentation: { category: 'files', icon: Presentation, tooltip: 'Presentation File' },
  Presentation: { category: 'editors', icon: Presentation, tooltip: 'Presentation' },
  presentationChart01: { category: 'editors', icon: PresentationChart01, tooltip: 'Presentation Chart 01' },
  presentationChart02: { category: 'editors', icon: PresentationChart02, tooltip: 'Presentation Chart 02' }, 
  presentationChart03: { category: 'editors', icon: PresentationChart03, tooltip: 'Presentation Chart 03' },
  profile: { category: 'editors', icon: Faceid, tooltip: 'Profile' },
  project: { category: 'editors', icon: Rocket02, tooltip: 'Project' },
  prompt: { category: 'editors', icon: MessageSquareQuote, tooltip: 'Prompt' },
  publish: { category: 'general', icon: ChromeCast, tooltip: 'Publish' },
  python: { category: 'files', icon: FileSearch, tooltip: 'Python File' },
  quiz: { category: 'files', icon: FileSearch, tooltip: 'Quiz File' },
  radio: { category: 'editors', icon: Radio, tooltip: 'Radio' },
  rainbow: { category: 'editors', icon: Rainbow, tooltip: 'Rainbow' },
  redo: { category: 'editors', icon: Redo2, tooltip: 'Redo' },
  refresh: { category: 'editors', icon: RotateCcw, tooltip: 'Refresh' },
  refreshCcw01: { category: 'editors', icon: RefreshCcw01, tooltip: 'Refresh Ccw 01' },
  refreshCcw02: { category: 'editors', icon: RefreshCcw02, tooltip: 'Refresh Ccw 02' },
  refreshCcw03: { category: 'editors', icon: RefreshCcw03, tooltip: 'Refresh Ccw 03' },
  refreshCcw04: { category: 'editors', icon: RefreshCcw04, tooltip: 'Refresh Ccw 04' },
  refreshCcw05: { category: 'editors', icon: RefreshCcw05, tooltip: 'Refresh Ccw 05' },
  refreshCw01: { category: 'editors', icon: RefreshCw01, tooltip: 'Refresh Cw 01' },
  remove: { category: 'editors', icon: Trash02, tooltip: 'Remove' },
  repeat: { category: 'editors', icon: Repeat01, tooltip: 'Repeat' },
  replace: { category: 'editors', icon: Replace, tooltip: 'Replace' },
  replaceall: { category: 'editors', icon: ReplaceAll, tooltip: 'Replace All' },
  reset: { category: 'editors', icon: RotateCcwIcon, tooltip: 'Reset' },
  restore: { category: 'general', icon: ClockRewind, tooltip: 'Restore' },
  reverseLeft: { category: 'editors', icon: ReverseLeft, tooltip: 'Reverse Left' },
  reverseRight: { category: 'editors', icon: ReverseRight, tooltip: 'Reverse Right' },
  rocket: { category: 'editors', icon: Rocket02, tooltip: 'Rocket' },
  row: { category: 'editors', icon: RectangleHorizontal, tooltip: 'Row' },
  rust: { category: 'files', icon: FileWarning, tooltip: 'Rust File' },
  save: { category: 'editors', icon: Bookmark, tooltip: 'Save' },
  search: { category: 'editors', icon: SearchRefraction, tooltip: 'Search' },
  security: { category: 'files', icon: Shield, tooltip: 'Security File' },
  send01: { category: 'editors', icon: Send01, tooltip: 'Send 01' },
  send02: { category: 'editors', icon: Send02, tooltip: 'Send 02' },
  send03: { category: 'editors', icon: Send03, tooltip: 'Send 03' },
  sendMessage: { category: 'editors', icon: CornerDownRightIcon, tooltip: 'Send Message' },
  server: { category: 'general', icon: Server01, tooltip: 'Server' },
  settings: { category: 'editors', icon: Sliders04, tooltip: 'Settings' },
  Settings: { category: 'editors', icon: Settings, tooltip: 'Settings' },
  share: { category: 'editors', icon: ShareIcon, tooltip: 'Share' },
  share05: { category: 'editors', icon: Share05, tooltip: 'Share 05' },
  share06: { category: 'editors', icon: Share06, tooltip: 'Share 06' },
  share07: { category: 'editors', icon: Share07, tooltip: 'Share 07' },
  sheet: { category: 'general', icon: Sheet, tooltip: 'Sheet' },
  shield: { category: 'editors', icon: Shield, tooltip: 'Shield' },
  Shield: { category: 'editors', icon: Shield, tooltip: 'Shield' },
  shortcut: { category: 'files', icon: FileSymlink, tooltip: 'Shortcut File' },
  sidebar: { category: 'editors', icon: SidebarIcon, tooltip: 'Sidebar' },
  sigma: { category: 'editors', icon: Sigma, tooltip: 'Sigma' },
  signal: { category: 'editors', icon: Signal01, tooltip: 'Signal' },
  simplify: { category: 'editors', icon: PartyPopper, tooltip: 'Simplify' },
  skew: { category: 'editors', icon: Skew, tooltip: 'Skew' },
  slashCircle01: { category: 'editors', icon: SlashCircle01, tooltip: 'Slash Circle 01' },
  slashCircle02: { category: 'editors', icon: SlashCircle02, tooltip: 'Slash Circle 02' },
  slashDivider: { category: 'editors', icon: SlashDivider, tooltip: 'Slash Divider' },
  slashOctagon: { category: 'editors', icon: SlashOctagon, tooltip: 'Slash Octagon' },
  sliders: { category: 'editors', icon: Sliders04, tooltip: 'Sliders' },
  slidersHorizontal: { category: 'editors', icon: SlidersHorizontalIcon, tooltip: 'Sliders Horizontal' },
  smile: { category: 'editors', icon: SmileIcon, tooltip: 'Smile' },
  socialmedia: { category: 'editors', icon: Camera01, tooltip: 'Social Media' },
  spacing: { category: 'editors', icon: ParagraphSpacing, tooltip: 'Spacing' },
  sparkles: { category: 'editors', icon: Sparkles, tooltip: 'Sparkles' },
  speedometer01: { category: 'editors', icon: Speedometer01, tooltip: 'Speedometer 01' },
  speedometer02: { category: 'editors', icon: Speedometer02, tooltip: 'Speedometer 02' },
  speedometer03: { category: 'editors', icon: Speedometer03, tooltip: 'Speedometer 03' },
  spinner: { category: 'editors', icon: Loader2Icon, tooltip: 'Spinner' },
  spreadsheet: { category: 'files', icon: FileSpreadsheet, tooltip: 'Spreadsheet File' },
  square: { category: 'editors', icon: SquareIcon, tooltip: 'Square' },
  squareBottomDashedScissors: { category: 'editors', icon: SquareBottomDashedScissors, tooltip: 'Square Bottom Dashed Scissors' },
  squareDashedMousePointer: { category: 'editors', icon: SquareDashedMousePointer, tooltip: 'Square Dashed Mouse Pointer' },
  squarePlus: { category: 'editors', icon: PlusSquare, tooltip: 'Basic Elements' },
  squareSigma: { category: 'editors', icon: SquareSigma, tooltip: 'Square Sigma' },
  squaresPlus: { category: 'editors', icon: SquarePlus, tooltip: 'Square Plus' },
  squirrel: { category: 'editors', icon: Squirrel, tooltip: 'Squirrel' },
  stand: { category: 'editors', icon: Stand, tooltip: 'Stand' },
  star: { category: 'editors', icon: Star07, tooltip: 'Star' },
  star07: { category: 'general', icon: Star07, tooltip: 'Star 07' },
  shoppingCart: { category: 'general', icon: ShoppingCart01, tooltip: 'Shopping Cart' },
  stash: { category: 'general', icon: GitBranchPlus, tooltip: 'Stash' },
  status: { category: 'editors', icon: CircleDotDashed, tooltip: 'Status' },
  stickynote: { category: 'editors', icon: StickyNote, tooltip: 'Sticky Note' },
  stop: { category: 'editors', icon: CircleStop, tooltip: 'Stop' },
  strikethrough: { category: 'editors', icon: Strikethrough, tooltip: 'Strikethrough' },
  studyguide: { category: 'files', icon: FileBarChart2, tooltip: 'Study Guide File' },
  styles: { category: 'files', icon: Paintbrush, tooltip: 'Styles File' },
  submit: { category: 'editors', icon: ArrowUpIcon, tooltip: 'Submit' },
  subscript: { category: 'editors', icon: Subscript, tooltip: 'Subscript' },
  suggestions: { category: 'editors', icon: PencilLine, tooltip: 'Suggestions' },
  summarize: { category: 'editors', icon: Album, tooltip: 'Summarize' },
  sun: { category: 'editors', icon: SunMedium, tooltip: 'Sun' },
  superscript: { category: 'editors', icon: Superscript, tooltip: 'Superscript' },
  switchHorizontal01: { category: 'editors', icon: SwitchHorizontal01, tooltip: 'Switch Horizontal 01' },
  switchHorizontal02: { category: 'editors', icon: SwitchHorizontal02, tooltip: 'Switch Horizontal 02' },
  switchVertical01: { category: 'editors', icon: SwitchVertical01, tooltip: 'Switch Vertical 01' },
  switchVertical02: { category: 'editors', icon: SwitchVertical02, tooltip: 'Switch Vertical 02' },
  table: { category: 'editors', icon: Table, tooltip: 'Table' },
  tags: { category: 'editors', icon: Hash02, tooltip: 'Tags' },
  target: { category: 'editors', icon: Target05, tooltip: 'Target' },
  target01: { category: 'editors', icon: Target01, tooltip: 'Target 01' },
  target02: { category: 'editors', icon: Target02, tooltip: 'Target 02' },
  target03: { category: 'editors', icon: Target03, tooltip: 'Target 03' },
  Target05: { category: 'editors', icon: Target05, tooltip: 'Target 05' },
  templates: { category: 'editors', icon: ShapesIcon, tooltip: 'Templates' },
  Terminal: { category: 'editors', icon: Terminal, tooltip: 'Terminal' },
  text: { category: 'editors', icon: Text, tooltip: 'Text' },
  thumbsDown: { category: 'editors', icon: ThumbsDown, tooltip: 'Thumbs Down' },
  thumbsUp: { category: 'editors', icon: ThumbsUp, tooltip: 'Thumbs Up' },
  timer: { category: 'editors', icon: AlarmClock, tooltip: 'Timer' },
  toc: { category: 'editors', icon: LayoutAlt02, tooltip: 'Table of Contents' },
  todo: { category: 'editors', icon: Square, tooltip: 'Todo' },
  trailingBlock: { category: 'general', icon: RailSymbol, tooltip: 'Trailing Block' },
  translate: { category: 'editors', icon: Languages, tooltip: 'Translate' },
  translate01: { category: 'editors', icon: Translate01, tooltip: 'Translate 01' },
  trash: { category: 'editors', icon: Trash02, tooltip: 'Trash' },
  trendDown01: { category: 'editors', icon: TrendDown01, tooltip: 'Trend Down 01' },
  trendDown02: { category: 'editors', icon: TrendDown02, tooltip: 'Trend Down 02' },
  trendUp01: { category: 'editors', icon: TrendUp01, tooltip: 'Trend Up 01' },
  trendUp02: { category: 'editors', icon: TrendUp02, tooltip: 'Trend Up 02' },
  tryAgain: { category: 'editors', icon: CornerUpLeft, tooltip: 'Try Again' },
  turnInto: { category: 'editors', icon: RefreshCw, tooltip: 'Turn Into' },
  type: { category: 'editors', icon: Tag01, tooltip: 'Type' },
  Type: { category: 'editors', icon: Type, tooltip: 'Type' },
  typescript: { category: 'files', icon: Braces, tooltip: 'TypeScript File' },
  ul: { category: 'editors', icon: List, tooltip: 'Unordered List' },
  underline: { category: 'editors', icon: Underline, tooltip: 'Underline' },
  underline01: { category: 'editors', icon: Underline01, tooltip: 'Underline 01' },
  undo: { category: 'editors', icon: Undo2, tooltip: 'Undo' },
  Undo2: { category: 'editors', icon: Undo2, tooltip: 'Undo 2' },
  ungroup: { category: 'editors', icon: Ungroup, tooltip: 'Ungroup' },
  unlink: { category: 'editors', icon: Link2Off, tooltip: 'Unlink' },
  upload: { category: 'editors', icon: UploadIcon, tooltip: 'Upload' },
  uploadCloud: { category: 'editors', icon: UploadCloudIcon, tooltip: 'Upload Cloud' },
  user: { category: 'editors', icon: User01, tooltip: 'User' },
  user02: { category: 'editors', icon: User02, tooltip: 'User 02' },
  user03: { category: 'editors', icon: User03, tooltip: 'User 03' },
  userCheck01: { category: 'editors', icon: UserCheck01, tooltip: 'User Check 01' },
  userCheck02: { category: 'editors', icon: UserCheck02, tooltip: 'User Check 02' },
  userCircle: { category: 'editors', icon: UserCircle, tooltip: 'User Circle' },
  userDown01: { category: 'editors', icon: UserDown01, tooltip: 'User Down 01' },
  userDown02: { category: 'editors', icon: UserDown02, tooltip: 'User Down 02' },
  userEdit: { category: 'editors', icon: UserEdit, tooltip: 'User Edit' },
  userLeft01: { category: 'editors', icon: UserLeft01, tooltip: 'User Left 01' },
  userLeft02: { category: 'editors', icon: UserLeft02, tooltip: 'User Left 02' },
  userMinus01: { category: 'editors', icon: UserMinus01, tooltip: 'User Minus 01' },
  userMinus02: { category: 'editors', icon: UserMinus02, tooltip: 'User Minus 02' },
  userPlus01: { category: 'editors', icon: UserPlus01, tooltip: 'User Plus 01' },
  userPlus02: { category: 'editors', icon: UserPlus02, tooltip: 'User Plus 02' },
  userRight01: { category: 'editors', icon: UserRight01, tooltip: 'User Right 01' },
  userRight02: { category: 'editors', icon: UserRight02, tooltip: 'User Right 02' },
  usersedit: { category: 'editors', icon: UsersEdit, tooltip: 'Users Edit' },
  userSquare: { category: 'editors', icon: UserSquare, tooltip: 'User Square' },
  Variable: { category: 'editors', icon: Variable, tooltip: 'Variable' },
  vector: { category: 'files', icon: FileOutput, tooltip: 'Vector File' },
  video: { category: 'editors', icon: VideoRecorder, tooltip: 'Video' },
  videoOff: { category: 'editors', icon: VideoRecorderOff, tooltip: 'Video Recorder Off' },
  videoRecorder: { category: 'editors', icon: VideoRecorder, tooltip: 'Video Recorder' },
  videoUpload: { category: 'editors', icon: FileVideo, tooltip: 'Video Upload' }, 
  viewing: { category: 'editors', icon: Eye, tooltip: 'Viewing' },
  volumeHigh: { category: 'editors', icon: VolumeMax, tooltip: 'Volume High' },
  volumemax: { category: 'editors', icon: VolumeMax, tooltip: 'Volume Max' },
  wallpaper: { category: 'editors', icon: Wallpaper, tooltip: 'Wallpaper' },
  wand: { category: 'editors', icon: Wand, tooltip: 'Wand' },
  warning: { category: 'editors', icon: AlertTriangleIcon, tooltip: 'Warning' },
  webcam: { category: 'editors', icon: Webcam01, tooltip: 'Webcam' },
  Webhook: { category: 'editors', icon: Webhook, tooltip: 'Webhook' },
  word: { category: 'files', icon: FileText, tooltip: 'Word File' },
  x: { category: 'editors', icon: XIcon, tooltip: 'X' },
  yaml: { category: 'files', icon: FileInput, tooltip: 'YAML File' },
  youtube: { category: 'media', icon: Youtube, tooltip: 'YouTube' },
  zap: { category: 'editors', icon: Zap, tooltip: 'Zap' },
  zoomIn: { category: 'editors', icon: Plus, tooltip: 'Zoom In' },
  zoomOut: { category: 'editors', icon: ZoomOut, tooltip: 'Zoom Out' },
} satisfies Record<string, IconWithCategory>;

export const Icons = Object.fromEntries(
  Object.entries(iconMap).map(([key, { icon: IconComponent }]) => [
    key,
    createIcon(IconComponent, key === 'spinner' ? { spin: true } : {}),
  ])
) as Record<IconName, ReturnType<typeof createIcon>>;

// Get all icon categories
export const getIconCategories = () => {
  const categories = new Set<IconCategory>();
  Object.values(iconMap).forEach(({ category }) => {
    categories.add(category);
  });

  return Array.from(categories).sort();
};

// Get icons by category
export const getIconsByCategory = (category: IconCategory) => {
  return Object.entries(iconMap)
    .filter(([_, { category: iconCategory }]) => iconCategory === category)
    .map(([key]) => key);
};

// Get a human-readable tooltip for an icon
export const getIconTooltip = (iconName: string): string => {
  // Convert camelCase to Title Case with spaces
  return iconName
    // Add space before capital letters and capitalize the first letter
    .replaceAll(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

export type IconFC = React.FC<IconProps>;

export type IconName = keyof typeof iconMap;

export type IconProps = {
  /**
   * Background color for the icon
   */
  bgColor?: string;
  /**
   * Text color for the icon 
   */
  color?: string;
  /**
   * Filled for the icon
   */
  filled?: boolean;
  /**
   * Gradient for the icon
   */
  gradient?: 'aurora' | 'cosmic' | 'ember' | 'fire' | 'forest' | 'midnight' | 'neon' | 'ocean' | 'royal' | 'spring' | 'sunset' | 'tropical';
  /**
   * All icons must be associated with an label, either next to the icon (using
   * sr-only) or on an interactive parent element (using aria-label). The latter
   * case is preferred (e.g. inside a button). If the icon does not add any new
   * information, it can be safely hidden.
   */
  label?: string;
} & LucideProps &
  VariantProps<typeof iconVariants>;