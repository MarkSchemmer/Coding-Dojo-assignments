# Generated by Django 2.0.5 on 2018-05-13 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dojos',
            name='desc',
            field=models.TextField(default='description'),
            preserve_default=False,
        ),
    ]