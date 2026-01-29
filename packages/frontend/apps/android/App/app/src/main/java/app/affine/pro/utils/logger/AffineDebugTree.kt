package app.lovenotes.pro.utils.logger

import timber.log.Timber

class LoveNotesDebugTree : Timber.DebugTree() {

    override fun createStackElementTag(element: StackTraceElement): String {
        return "LoveNotes:${super.createStackElementTag(element)}:${element.lineNumber}"
    }
}