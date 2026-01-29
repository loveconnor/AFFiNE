package app.lovenotes.pro.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.ReadOnlyComposable

object LoveNotesTheme {
    val colors: LoveNotesColorScheme
        @ReadOnlyComposable
        @Composable
        get() = LocalLoveNotesColors.current

    val typography: LoveNotesTypography
        @ReadOnlyComposable
        @Composable
        get() = LocalLoveNotesTypography.current
}

@Composable
fun LoveNotesTheme(
    mode: ThemeMode = ThemeMode.System,
    content: @Composable () -> Unit
) {
    val colors = when (mode) {
        ThemeMode.Light -> lovenotesLightScheme
        ThemeMode.Dark -> lovenotesDarkScheme
        ThemeMode.System -> if (isSystemInDarkTheme()) lovenotesDarkScheme else lovenotesLightScheme
    }

    CompositionLocalProvider(LocalLoveNotesColors provides colors) {
        MaterialTheme {
            content()
        }
    }
}

enum class ThemeMode(name: String) {
    Light("light"),
    Dark("dark"),
    System("system");

    fun of(name: String) = when (name) {
        "light" -> Light
        "dark" -> Dark
        else -> System
    }
}