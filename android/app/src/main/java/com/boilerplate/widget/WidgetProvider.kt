package com.boilerplate.widget

import android.annotation.SuppressLint
import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.widget.RemoteViews
import com.boilerplate.MainActivity
import com.boilerplate.R

class WidgetProvider : AppWidgetProvider() {
    private val MY_ACTION = "android.action.MY_ACTION"
    private val SAMPLE_ACTION1 = "android.action.SAMPLE_ACTION1"
    private val SAMPLE_ACTION2 = "android.action.SAMPLE_ACTION2"

    // 위젯 갱신 주기에 따라 위젯을 갱신할때 호출
    override fun onUpdate(context: Context?, appWidgetManager: AppWidgetManager?, appWidgetIds: IntArray?) {
        super.onUpdate(context, appWidgetManager, appWidgetIds)
        appWidgetIds?.forEach { appWidgetId ->
            val views: RemoteViews = addViews(context)
            appWidgetManager?.updateAppWidget(appWidgetId, views)
        }
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        super.onReceive(context, intent)
        var action = intent?.action
        when(action) {
            MY_ACTION -> {
                println("MY_ACTION")
            }
            SAMPLE_ACTION1 -> {
                println("SAMPLE_ACTION1")
            }
            SAMPLE_ACTION2 -> {
                println("SAMPLE_ACTION2")
            }
        }
    }

    // 위젯이 처음 생성될때 호출되며, 동일한 위젯의 경우 처음 호출
    override fun onEnabled(context: Context?) {
        super.onEnabled(context)
    }

    // 위젯의 마지막 인스턴스가 제거될때 호출
    override fun onDisabled(context: Context?) {
        super.onDisabled(context)
    }

    // 위젯이 사용자에 의해 제거될때 호출
    override fun onDeleted(context: Context?, appWidgetIds: IntArray?) {
        super.onDeleted(context, appWidgetIds)
    }

    private fun setMyAction(context: Context?): PendingIntent {
        val intent = Intent(context, MainActivity::class.java)
        return PendingIntent.getActivity(context, 0, intent, 0)
    }

    private fun buildURIIntent(context: Context?): PendingIntent {
        val intent = Intent(Intent.ACTION_VIEW).setData(Uri.parse("http://stickode.com/"))
        return PendingIntent.getActivity(context, 0, intent, 0)
    }

    @SuppressLint("RemoteViewLayout")
    private fun addViews(context: Context?): RemoteViews {
        val views = RemoteViews(context?.packageName, R.layout.widget)
        views.setOnClickPendingIntent(R.id.appButton, setMyAction(context))
        views.setOnClickPendingIntent(R.id.linkButton, buildURIIntent(context))
        return views
    }

}